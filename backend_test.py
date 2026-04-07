import requests
import sys
import json
from datetime import datetime

class CanelliConstructionAPITester:
    def __init__(self, base_url="https://premium-plumbing-nc.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []
        self.created_project_id = None

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
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)
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
            "phone": "(980) 555-9999",
            "email": "john.test@example.com",
            "project_type": "custom_home",
            "message": "Test message for custom home construction project"
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
            # Missing required fields
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

    def test_seed_projects(self):
        """Test seeding sample projects"""
        return self.run_test(
            "Seed Sample Projects",
            "POST",
            "projects/seed",
            200
        )

    def test_get_projects(self):
        """Test getting all projects"""
        return self.run_test(
            "Get All Projects",
            "GET",
            "projects",
            200
        )

    def test_get_projects_by_category(self):
        """Test getting projects by category"""
        return self.run_test(
            "Get Projects by Category (residential)",
            "GET",
            "projects?category=residential",
            200
        )

    def test_create_project(self):
        """Test creating a new project"""
        test_data = {
            "title": "Test Custom Home",
            "category": "residential",
            "description": "A test custom home project for API testing",
            "image_url": "https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=800",
            "location": "Charlotte, NC",
            "year": "2024",
            "featured": False
        }
        
        success, response_data = self.run_test(
            "Create New Project",
            "POST",
            "projects",
            200,
            data=test_data
        )
        
        if success and response_data and 'id' in response_data:
            self.created_project_id = response_data['id']
            print(f"   Created project ID: {self.created_project_id}")
        
        return success, response_data

    def test_get_project_by_id(self):
        """Test getting a specific project by ID"""
        if not self.created_project_id:
            print("⚠️  Skipping - No project ID available")
            return True, {}
            
        return self.run_test(
            "Get Project by ID",
            "GET",
            f"projects/{self.created_project_id}",
            200
        )

    def test_update_project(self):
        """Test updating a project"""
        if not self.created_project_id:
            print("⚠️  Skipping - No project ID available")
            return True, {}
            
        update_data = {
            "title": "Updated Test Custom Home",
            "featured": True
        }
        
        return self.run_test(
            "Update Project",
            "PUT",
            f"projects/{self.created_project_id}",
            200,
            data=update_data
        )

    def test_delete_project(self):
        """Test deleting a project"""
        if not self.created_project_id:
            print("⚠️  Skipping - No project ID available")
            return True, {}
            
        return self.run_test(
            "Delete Project",
            "DELETE",
            f"projects/{self.created_project_id}",
            200
        )

    def test_cost_estimator(self):
        """Test cost estimator calculation"""
        test_data = {
            "project_type": "custom_home",
            "square_feet": 2500,
            "finish_level": "premium"
        }
        
        return self.run_test(
            "Cost Estimator Calculation",
            "POST",
            "estimate",
            200,
            data=test_data
        )

    def test_cost_estimator_validation(self):
        """Test cost estimator with invalid data"""
        test_data = {
            "project_type": "invalid_type",
            "square_feet": 2500,
            "finish_level": "premium"
        }
        
        return self.run_test(
            "Cost Estimator Validation (Invalid Type)",
            "POST",
            "estimate",
            400,  # Expecting validation error
            data=test_data
        )

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting Canelli Construction API Tests")
        print(f"   Base URL: {self.base_url}")
        print(f"   API URL: {self.api_url}")
        print("=" * 60)

        # Test basic connectivity
        self.test_root_endpoint()
        
        # Test contact form functionality
        self.test_contact_form_submission()
        self.test_contact_form_validation()
        self.test_get_contact_submissions()
        
        # Test project/portfolio functionality
        self.test_seed_projects()
        self.test_get_projects()
        self.test_get_projects_by_category()
        self.test_create_project()
        self.test_get_project_by_id()
        self.test_update_project()
        self.test_delete_project()
        
        # Test cost estimator functionality
        self.test_cost_estimator()
        self.test_cost_estimator_validation()

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
    tester = CanelliConstructionAPITester()
    return tester.run_all_tests()

if __name__ == "__main__":
    sys.exit(main())