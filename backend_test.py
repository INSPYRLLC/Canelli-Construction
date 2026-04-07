import requests
import sys
import json
from datetime import datetime

class PlumbingAPITester:
    def __init__(self, base_url="https://premium-plumbing-nc.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            else:
                raise ValueError(f"Unsupported method: {method}")

            success = response.status_code == expected_status
            
            result = {
                "test_name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response_data": None,
                "error": None
            }

            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    result["response_data"] = response.json()
                    print(f"   Response: {json.dumps(result['response_data'], indent=2)}")
                except:
                    result["response_data"] = response.text
                    print(f"   Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    result["error"] = error_data
                    print(f"   Error: {json.dumps(error_data, indent=2)}")
                except:
                    result["error"] = response.text
                    print(f"   Error: {response.text}")

            self.test_results.append(result)
            return success, result["response_data"]

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                "test_name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": None,
                "success": False,
                "response_data": None,
                "error": str(e)
            }
            self.test_results.append(result)
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "John Test",
            "phone": "(704) 555-9999",
            "issue": "Test plumbing issue - leak in kitchen sink"
        }
        
        return self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )

    def test_contact_form_validation(self):
        """Test contact form with missing fields"""
        test_data = {
            "name": "John Test"
            # Missing phone and issue fields
        }
        
        return self.run_test(
            "Contact Form Validation (Missing Fields)",
            "POST",
            "contact",
            422,  # Expecting validation error
            data=test_data
        )

    def test_get_contact_submissions(self):
        """Test getting contact submissions"""
        return self.run_test(
            "Get Contact Submissions",
            "GET",
            "contact",
            200
        )

    def test_status_check_creation(self):
        """Test status check creation"""
        test_data = {
            "client_name": "Test Client"
        }
        
        return self.run_test(
            "Status Check Creation",
            "POST",
            "status",
            200,
            data=test_data
        )

    def test_get_status_checks(self):
        """Test getting status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "status",
            200
        )

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting E.A. Jones Plumbing API Tests")
        print(f"   Base URL: {self.base_url}")
        print(f"   API URL: {self.api_url}")
        print("=" * 60)

        # Test basic connectivity
        self.test_root_endpoint()
        
        # Test contact form functionality
        self.test_contact_form_submission()
        self.test_contact_form_validation()
        self.test_get_contact_submissions()
        
        # Test status check functionality
        self.test_status_check_creation()
        self.test_get_status_checks()

        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Test Summary:")
        print(f"   Tests Run: {self.tests_run}")
        print(f"   Tests Passed: {self.tests_passed}")
        print(f"   Tests Failed: {self.tests_run - self.tests_passed}")
        print(f"   Success Rate: {(self.tests_passed/self.tests_run)*100:.1f}%")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return 0
        else:
            print("❌ Some tests failed!")
            return 1

def main():
    tester = PlumbingAPITester()
    return tester.run_all_tests()

if __name__ == "__main__":
    sys.exit(main())