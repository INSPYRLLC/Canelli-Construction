Here are all the files for the **Vanilla HTML/CSS/JS version** - just create these 3 files and you're ready to deploy:

---

## FILE 1: `index.html`
Action: file_editor view /app/github-export/vanilla/index.html
Observation: [Showing lines 1-745 of 745 total] /app/github-export/vanilla/index.html:
1|<!DOCTYPE html>
2|<html lang="en">
3|<head>
4|    <meta charset="UTF-8">
5|    <meta name="viewport" content="width=device-width, initial-scale=1.0">
6|    <meta name="description" content="Canelli Construction - Charlotte's premier custom home builder. Custom homes, commercial construction, and renovations built with precision and transparency.">
7|    <meta name="keywords" content="Custom Home Builder Charlotte NC, Charlotte Construction Company, Luxury Home Builder, Commercial Construction Charlotte">
8|    <title>Canelli Construction | Charlotte's Premier Builder</title>
9|    
10|    <!-- Fonts -->
11|    <link rel="preconnect" href="https://fonts.googleapis.com">
12|    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
13|    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
14|    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&display=swap" rel="stylesheet">
15|    
16|    <!-- Lucide Icons -->
17|    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
18|    
19|    <link rel="stylesheet" href="styles.css">
20|</head>
21|<body>
22|    <!-- Header -->
23|    <header id="header" class="header">
24|        <div class="container header-content">
25|            <a href="#hero" class="logo">
26|                <span class="logo-text">Canelli</span>
27|                <span class="logo-dot">.</span>
28|            </a>
29|            
30|            <nav class="nav-desktop">
31|                <a href="#about" class="nav-link">About</a>
32|                <a href="#services" class="nav-link">Services</a>
33|                <a href="#portfolio" class="nav-link">Portfolio</a>
34|                <a href="#process" class="nav-link">Process</a>
35|                <a href="#contact" class="nav-link">Contact</a>
36|            </nav>
37|            
38|            <div class="header-cta">
39|                <a href="tel:+19809498800" class="phone-link">980-949-8800</a>
40|                <a href="#contact" class="btn btn-gold">Get a Quote</a>
41|            </div>
42|            
43|            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
44|                <i data-lucide="menu" class="menu-icon"></i>
45|                <i data-lucide="x" class="close-icon hidden"></i>
46|            </button>
47|        </div>
48|        
49|        <!-- Mobile Menu -->
50|        <div class="mobile-menu hidden" id="mobileMenu">
51|            <nav class="mobile-nav">
52|                <a href="#about" class="mobile-nav-link">About</a>
53|                <a href="#services" class="mobile-nav-link">Services</a>
54|                <a href="#portfolio" class="mobile-nav-link">Portfolio</a>
55|                <a href="#process" class="mobile-nav-link">Process</a>
56|                <a href="#contact" class="mobile-nav-link">Contact</a>
57|                <a href="#contact" class="btn btn-gold mobile-cta">Get a Quote</a>
58|            </nav>
59|        </div>
60|    </header>
61|
62|    <main>
63|        <!-- Hero Section -->
64|        <section id="hero" class="hero">
65|            <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1774685110718-c5b4fe026144?w=1920');"></div>
66|            <div class="hero-overlay"></div>
67|            <div class="container hero-content">
68|                <p class="overline animate-fade-up">Charlotte's Premier Builder</p>
69|                <h1 class="hero-title animate-fade-up delay-1">Building Charlotte's Finest Homes & Spaces</h1>
70|                <p class="hero-subtitle animate-fade-up delay-2">Custom homes, commercial construction, and renovations built with precision and transparency.</p>
71|                
72|                <div class="hero-ctas animate-fade-up delay-3">
73|                    <a href="#contact" class="btn btn-gold btn-lg">
74|                        Get a Free Quote
75|                        <i data-lucide="arrow-right"></i>
76|                    </a>
77|                    <a href="#portfolio" class="btn btn-ghost btn-lg">View Portfolio</a>
78|                </div>
79|                
80|                <div class="hero-trust animate-fade-up delay-4">
81|                    <span class="trust-item">
82|                        <i data-lucide="award"></i>
83|                        20+ Years Experience
84|                    </span>
85|                    <span class="trust-item">
86|                        <i data-lucide="pen-tool"></i>
87|                        Full-Service Design & Build
88|                    </span>
89|                    <span class="trust-item">
90|                        <i data-lucide="dollar-sign"></i>
91|                        Transparent Pricing
92|                    </span>
93|                </div>
94|            </div>
95|        </section>
96|
97|        <!-- About Section -->
98|        <section id="about" class="section about">
99|            <div class="container">
100|                <div class="about-grid">
101|                    <div class="about-image-wrapper">
102|                        <img src="https://images.unsplash.com/photo-1772442198624-4fc4d7281e89?w=800" alt="Blueprint review" class="about-image">
103|                        <div class="experience-badge">
104|                            <span class="experience-number">20+</span>
105|                            <span class="experience-text">Years Excellence</span>
106|                        </div>
107|                    </div>
108|                    
109|                    <div class="about-content">
110|                        <p class="overline">Our Story</p>
111|                        <h2 class="section-title">Crafting Excellence Since 2004</h2>
112|                        <p class="about-text">With over two decades of experience spanning Europe and the United States, Canelli Construction has built a reputation for uncompromising quality and transparent partnerships.</p>
113|                        <p class="about-text">We believe every project tells a story. Our family-focused, client-first approach means your vision becomes our mission. No upselling, no hidden agendas—just exceptional craftsmanship delivered with integrity.</p>
114|                        
115|                        <div class="about-features">
116|                            <div class="about-feature">
117|                                <i data-lucide="check-circle"></i>
118|                                <span>Transparent Communication</span>
119|                            </div>
120|                            <div class="about-feature">
121|                                <i data-lucide="check-circle"></i>
122|                                <span>Premium Materials</span>
123|                            </div>
124|                            <div class="about-feature">
125|                                <i data-lucide="check-circle"></i>
126|                                <span>On-Time Delivery</span>
127|                            </div>
128|                            <div class="about-feature">
129|                                <i data-lucide="check-circle"></i>
130|                                <span>Client-First Approach</span>
131|                            </div>
132|                        </div>
133|                    </div>
134|                </div>
135|            </div>
136|        </section>
137|
138|        <!-- Services Section -->
139|        <section id="services" class="section services">
140|            <div class="container">
141|                <div class="section-header">
142|                    <p class="overline">What We Build</p>
143|                    <h2 class="section-title">Comprehensive Construction Services</h2>
144|                    <p class="section-subtitle">From concept to completion, we deliver excellence across every project type.</p>
145|                </div>
146|                
147|                <div class="services-grid">
148|                    <div class="service-card">
149|                        <div class="service-icon">
150|                            <i data-lucide="home"></i>
151|                        </div>
152|                        <h3 class="service-title">Custom Home Building</h3>
153|                        <p class="service-desc">Bespoke luxury homes designed and built to your exact specifications, from foundation to finishing touches.</p>
154|                        <a href="#contact" class="service-link">
155|                            Get Quote <i data-lucide="chevron-right"></i>
156|                        </a>
157|                    </div>
158|                    
159|                    <div class="service-card">
160|                        <div class="service-icon">
161|                            <i data-lucide="building-2"></i>
162|                        </div>
163|                        <h3 class="service-title">Turnkey Homes</h3>
164|                        <p class="service-desc">Move-in ready homes built on your lot with premium finishes and stress-free project management.</p>
165|                        <a href="#contact" class="service-link">
166|                            Get Quote <i data-lucide="chevron-right"></i>
167|                        </a>
168|                    </div>
169|                    
170|                    <div class="service-card">
171|                        <div class="service-icon">
172|                            <i data-lucide="building-2"></i>
173|                        </div>
174|                        <h3 class="service-title">Commercial Construction</h3>
175|                        <p class="service-desc">Professional commercial spaces that reflect your brand and meet your business needs.</p>
176|                        <a href="#contact" class="service-link">
177|                            Get Quote <i data-lucide="chevron-right"></i>
178|                        </a>
179|                    </div>
180|                    
181|                    <div class="service-card">
182|                        <div class="service-icon">
183|                            <i data-lucide="hammer"></i>
184|                        </div>
185|                        <h3 class="service-title">Remodeling</h3>
186|                        <p class="service-desc">Transform your existing space with expert renovations that blend modern design with timeless craftsmanship.</p>
187|                        <a href="#contact" class="service-link">
188|                            Get Quote <i data-lucide="chevron-right"></i>
189|                        </a>
190|                    </div>
191|                    
192|                    <div class="service-card">
193|                        <div class="service-icon">
194|                            <i data-lucide="home"></i>
195|                        </div>
196|                        <h3 class="service-title">ADU Construction</h3>
197|                        <p class="service-desc">Accessory dwelling units that maximize your property's potential and value.</p>
198|                        <a href="#contact" class="service-link">
199|                            Get Quote <i data-lucide="chevron-right"></i>
200|                        </a>
201|                    </div>
202|                    
203|                    <div class="service-card">
204|                        <div class="service-icon">
205|                            <i data-lucide="plus"></i>
206|                        </div>
207|                        <h3 class="service-title">Home Additions</h3>
208|                        <p class="service-desc">Seamlessly expand your living space with additions that complement your home's architecture.</p>
209|                        <a href="#contact" class="service-link">
210|                            Get Quote <i data-lucide="chevron-right"></i>
211|                        </a>
212|                    </div>
213|                    
214|                    <div class="service-card">
215|                        <div class="service-icon">
216|                            <i data-lucide="building-2"></i>
217|                        </div>
218|                        <h3 class="service-title">Residential Development</h3>
219|                        <p class="service-desc">End-to-end development services for multi-unit residential projects.</p>
220|                        <a href="#contact" class="service-link">
221|                            Get Quote <i data-lucide="chevron-right"></i>
222|                        </a>
223|                    </div>
224|                </div>
225|            </div>
226|        </section>
227|
228|        <!-- Portfolio Section -->
229|        <section id="portfolio" class="section portfolio">
230|            <div class="container">
231|                <div class="section-header">
232|                    <p class="overline">Our Work</p>
233|                    <h2 class="section-title">Featured Projects</h2>
234|                    <p class="section-subtitle">Explore our portfolio of custom homes, commercial builds, and renovations.</p>
235|                </div>
236|                
237|                <div class="portfolio-tabs">
238|                    <button class="tab-btn active" data-filter="all">All Projects</button>
239|                    <button class="tab-btn" data-filter="residential">Residential</button>
240|                    <button class="tab-btn" data-filter="commercial">Commercial</button>
241|                    <button class="tab-btn" data-filter="adu">ADU</button>
242|                    <button class="tab-btn" data-filter="remodel">Remodel</button>
243|                </div>
244|                
245|                <div class="portfolio-grid" id="portfolioGrid">
246|                    <div class="portfolio-card" data-category="residential">
247|                        <img src="https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=800" alt="Modern Lakefront Estate" class="portfolio-image">
248|                        <div class="portfolio-overlay">
249|                            <p class="portfolio-category">Residential</p>
250|                            <h3 class="portfolio-title">Modern Lakefront Estate</h3>
251|                            <p class="portfolio-location">Lake Norman, NC</p>
252|                        </div>
253|                    </div>
254|                    
255|                    <div class="portfolio-card" data-category="residential">
256|                        <img src="https://images.unsplash.com/photo-1760072513442-9872656c1b07?w=800" alt="Contemporary Urban Residence" class="portfolio-image">
257|                        <div class="portfolio-overlay">
258|                            <p class="portfolio-category">Residential</p>
259|                            <h3 class="portfolio-title">Contemporary Urban Residence</h3>
260|                            <p class="portfolio-location">Myers Park, Charlotte</p>
261|                        </div>
262|                    </div>
263|                    
264|                    <div class="portfolio-card" data-category="adu">
265|                        <img src="https://images.unsplash.com/photo-1757262798620-c2cc40cfb440?w=800" alt="Luxury ADU Suite" class="portfolio-image">
266|                        <div class="portfolio-overlay">
267|                            <p class="portfolio-category">ADU</p>
268|                            <h3 class="portfolio-title">Luxury ADU Suite</h3>
269|                            <p class="portfolio-location">SouthPark, Charlotte</p>
270|                        </div>
271|                    </div>
272|                    
273|                    <div class="portfolio-card" data-category="commercial">
274|                        <img src="https://images.unsplash.com/photo-1766603636700-e9d80473f40f?w=800" alt="Boutique Office Building" class="portfolio-image">
275|                        <div class="portfolio-overlay">
276|                            <p class="portfolio-category">Commercial</p>
277|                            <h3 class="portfolio-title">Boutique Office Building</h3>
278|                            <p class="portfolio-location">South End, Charlotte</p>
279|                        </div>
280|                    </div>
281|                    
282|                    <div class="portfolio-card" data-category="remodel">
283|                        <img src="https://images.unsplash.com/photo-1774685110718-c5b4fe026144?w=800" alt="Historic Home Renovation" class="portfolio-image">
284|                        <div class="portfolio-overlay">
285|                            <p class="portfolio-category">Remodel</p>
286|                            <h3 class="portfolio-title">Historic Home Renovation</h3>
287|                            <p class="portfolio-location">Dilworth, Charlotte</p>
288|                        </div>
289|                    </div>
290|                    
291|                    <div class="portfolio-card" data-category="residential">
292|                        <img src="https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg?w=800" alt="Turnkey Family Home" class="portfolio-image">
293|                        <div class="portfolio-overlay">
294|                            <p class="portfolio-category">Residential</p>
295|                            <h3 class="portfolio-title">Turnkey Family Home</h3>
296|                            <p class="portfolio-location">Ballantyne, Charlotte</p>
297|                        </div>
298|                    </div>
299|                </div>
300|            </div>
301|        </section>
302|
303|        <!-- Why Choose Us Section -->
304|        <section id="why-us" class="section why-us">
305|            <div class="container">
306|                <div class="section-header">
307|                    <p class="overline">Why Canelli</p>
308|                    <h2 class="section-title">The Canelli Difference</h2>
309|                </div>
310|                
311|                <div class="why-grid">
312|                    <div class="why-card">
313|                        <div class="why-icon">
314|                            <i data-lucide="award"></i>
315|                        </div>
316|                        <h3 class="why-title">20+ Years Experience</h3>
317|                        <p class="why-desc">Two decades of excellence in the US & Europe</p>
318|                    </div>
319|                    
320|                    <div class="why-card">
321|                        <div class="why-icon">
322|                            <i data-lucide="pen-tool"></i>
323|                        </div>
324|                        <h3 class="why-title">Full-Service</h3>
325|                        <p class="why-desc">Design → Permits → Build, all under one roof</p>
326|                    </div>
327|                    
328|                    <div class="why-card">
329|                        <div class="why-icon">
330|                            <i data-lucide="dollar-sign"></i>
331|                        </div>
332|                        <h3 class="why-title">Transparent Pricing</h3>
333|                        <p class="why-desc">No hidden costs, no surprises</p>
334|                    </div>
335|                    
336|                    <div class="why-card">
337|                        <div class="why-icon">
338|                            <i data-lucide="shield"></i>
339|                        </div>
340|                        <h3 class="why-title">High-End Craftsmanship</h3>
341|                        <p class="why-desc">Premium materials and meticulous attention to detail</p>
342|                    </div>
343|                    
344|                    <div class="why-card">
345|                        <div class="why-icon">
346|                            <i data-lucide="users"></i>
347|                        </div>
348|                        <h3 class="why-title">Client-Focused</h3>
349|                        <p class="why-desc">Your vision drives every decision we make</p>
350|                    </div>
351|                </div>
352|            </div>
353|        </section>
354|
355|        <!-- Process Section -->
356|        <section id="process" class="section process">
357|            <div class="container">
358|                <div class="section-header">
359|                    <p class="overline">Our Process</p>
360|                    <h2 class="section-title">How We Work</h2>
361|                    <p class="section-subtitle">A streamlined, transparent process from initial consultation to final walkthrough.</p>
362|                </div>
363|                
364|                <div class="process-grid">
365|                    <div class="process-step">
366|                        <span class="process-number">01</span>
367|                        <h3 class="process-title">Suitability</h3>
368|                        <p class="process-desc">We assess your project requirements, budget, and timeline to ensure we're the right fit.</p>
369|                    </div>
370|                    
371|                    <div class="process-step">
372|                        <span class="process-number">02</span>
373|                        <h3 class="process-title">Design</h3>
374|                        <p class="process-desc">Collaborative design process to bring your vision to life with detailed plans and 3D renderings.</p>
375|                    </div>
376|                    
377|                    <div class="process-step">
378|                        <span class="process-number">03</span>
379|                        <h3 class="process-title">Permits</h3>
380|                        <p class="process-desc">We handle all permits and approvals, navigating regulations so you don't have to.</p>
381|                    </div>
382|                    
383|                    <div class="process-step">
384|                        <span class="process-number">04</span>
385|                        <h3 class="process-title">Build</h3>
386|                        <p class="process-desc">Expert construction with regular updates, quality checkpoints, and on-time delivery.</p>
387|                    </div>
388|                </div>
389|            </div>
390|        </section>
391|
392|        <!-- Service Area Section -->
393|        <section id="service-area" class="section service-area">
394|            <div class="service-area-bg" style="background-image: url('https://images.unsplash.com/photo-1582555645330-9fa5f195e1ca?w=1200');"></div>
395|            <div class="service-area-overlay"></div>
396|            <div class="container service-area-content">
397|                <p class="overline">Service Area</p>
398|                <h2 class="section-title">Proudly Serving Charlotte & Beyond</h2>
399|                <p class="service-area-text">We serve the greater Charlotte metropolitan area and surrounding communities in North Carolina.</p>
400|                
401|                <div class="service-areas-list">
402|                    <span class="area-tag">Charlotte</span>
403|                    <span class="area-tag">Matthews</span>
404|                    <span class="area-tag">Huntersville</span>
405|                    <span class="area-tag">Belmont</span>
406|                    <span class="area-tag">Concord</span>
407|                    <span class="area-tag">Lake Norman</span>
408|                    <span class="area-tag">SouthPark</span>
409|                    <span class="area-tag">Myers Park</span>
410|                    <span class="area-tag">Ballantyne</span>
411|                    <span class="area-tag">Waxhaw</span>
412|                </div>
413|                
414|                <a href="#contact" class="btn btn-gold btn-lg">
415|                    <i data-lucide="map-pin"></i>
416|                    Contact for Service
417|                </a>
418|            </div>
419|        </section>
420|
421|        <!-- Feature Section -->
422|        <section class="section features">
423|            <div class="container">
424|                <div class="features-grid">
425|                    <div class="feature-card">
426|                        <p class="overline">Stress-Free Building</p>
427|                        <h3 class="feature-title">Turnkey Homes</h3>
428|                        <p class="feature-desc">Dream of a custom home without the hassle? Our turnkey process handles everything—from design and permits to construction and finishing—so you can focus on the excitement of your new home.</p>
429|                        <a href="#contact" class="btn btn-gold">
430|                            Learn More <i data-lucide="arrow-right"></i>
431|                        </a>
432|                    </div>
433|                    
434|                    <div class="feature-card">
435|                        <p class="overline">Maximize Your Property</p>
436|                        <h3 class="feature-title">ADU Construction</h3>
437|                        <p class="feature-desc">Accessory Dwelling Units are the fastest-growing housing trend. Add rental income, guest space, or a home office with a premium ADU built to match your property's aesthetic.</p>
438|                        <a href="#contact" class="btn btn-gold">
439|                            Learn More <i data-lucide="arrow-right"></i>
440|                        </a>
441|                    </div>
442|                </div>
443|            </div>
444|        </section>
445|
446|        <!-- Testimonials Section -->
447|        <section id="testimonials" class="section testimonials">
448|            <div class="container">
449|                <div class="section-header">
450|                    <p class="overline">Testimonials</p>
451|                    <h2 class="section-title">Client Stories</h2>
452|                </div>
453|                
454|                <div class="testimonials-grid">
455|                    <div class="testimonial-card">
456|                        <div class="testimonial-stars">
457|                            <i data-lucide="star" class="star-filled"></i>
458|                            <i data-lucide="star" class="star-filled"></i>
459|                            <i data-lucide="star" class="star-filled"></i>
460|                            <i data-lucide="star" class="star-filled"></i>
461|                            <i data-lucide="star" class="star-filled"></i>
462|                        </div>
463|                        <p class="testimonial-text">"Canelli Construction exceeded every expectation. Our lakefront home is a masterpiece—their attention to detail and communication throughout was exceptional."</p>
464|                        <div class="testimonial-author">
465|                            <span class="author-name">David & Sarah Mitchell</span>
466|                            <span class="author-project">Custom Home, Lake Norman</span>
467|                        </div>
468|                    </div>
469|                    
470|                    <div class="testimonial-card">
471|                        <div class="testimonial-stars">
472|                            <i data-lucide="star" class="star-filled"></i>
473|                            <i data-lucide="star" class="star-filled"></i>
474|                            <i data-lucide="star" class="star-filled"></i>
475|                            <i data-lucide="star" class="star-filled"></i>
476|                            <i data-lucide="star" class="star-filled"></i>
477|                        </div>
478|                        <p class="testimonial-text">"Professional, transparent, and delivered on time. Our office building has received countless compliments. A true partner in our vision."</p>
479|                        <div class="testimonial-author">
480|                            <span class="author-name">Michael Chen</span>
481|                            <span class="author-project">Commercial Build, South End</span>
482|                        </div>
483|                    </div>
484|                    
485|                    <div class="testimonial-card">
486|                        <div class="testimonial-stars">
487|                            <i data-lucide="star" class="star-filled"></i>
488|                            <i data-lucide="star" class="star-filled"></i>
489|                            <i data-lucide="star" class="star-filled"></i>
490|                            <i data-lucide="star" class="star-filled"></i>
491|                            <i data-lucide="star" class="star-filled"></i>
492|                        </div>
493|                        <p class="testimonial-text">"They transformed our 1920s home into a modern sanctuary while preserving its character. The craftsmanship is simply outstanding."</p>
494|                        <div class="testimonial-author">
495|                            <span class="author-name">Jennifer & Robert Walsh</span>
496|                            <span class="author-project">Home Renovation, Dilworth</span>
497|                        </div>
498|                    </div>
499|                    
500|                    <div class="testimonial-card">
501|                        <div class="testimonial-stars">
502|                            <i data-lucide="star" class="star-filled"></i>
503|                            <i data-lucide="star" class="star-filled"></i>
504|                            <i data-lucide="star" class="star-filled"></i>
505|                            <i data-lucide="star" class="star-filled"></i>
506|                            <i data-lucide="star" class="star-filled"></i>
507|                        </div>
508|                        <p class="testimonial-text">"Our ADU was completed ahead of schedule and the quality is indistinguishable from the main house. Highly recommend!"</p>
509|                        <div class="testimonial-author">
510|                            <span class="author-name">The Morrison Family</span>
511|                            <span class="author-project">ADU Construction, Myers Park</span>
512|                        </div>
513|                    </div>
514|                </div>
515|            </div>
516|        </section>
517|
518|        <!-- Estimator Section -->
519|        <section id="estimator" class="section estimator">
520|            <div class="container">
521|                <div class="estimator-grid">
522|                    <div class="estimator-info">
523|                        <p class="overline">Planning Tool</p>
524|                        <h2 class="section-title">New Construction Calculator</h2>
525|                        <p class="estimator-text">Get a rough estimate for your project based on size and type. This tool provides ballpark figures to help with initial planning.</p>
526|                        <div class="estimator-feature">
527|                            <i data-lucide="calculator"></i>
528|                            <span>Instant estimates • No obligation</span>
529|                        </div>
530|                    </div>
531|                    
532|                    <div class="estimator-form-wrapper">
533|                        <form id="estimatorForm" class="estimator-form">
534|                            <div class="form-group">
535|                                <label for="projectType">Project Type</label>
536|                                <select id="projectType" name="projectType" required>
537|                                    <option value="custom_home">Custom Home</option>
538|                                    <option value="turnkey">Turnkey Home</option>
539|                                    <option value="remodel">Remodel</option>
540|                                    <option value="adu">ADU</option>
541|                                    <option value="addition">Home Addition</option>
542|                                    <option value="commercial">Commercial</option>
543|                                </select>
544|                            </div>
545|                            
546|                            <div class="form-group">
547|                                <label for="squareFeet">Square Footage: <span id="sqftValue" class="gold-text">2,500 sq ft</span></label>
548|                                <input type="range" id="squareFeet" name="squareFeet" min="500" max="10000" step="100" value="2500">
549|                            </div>
550|                            
551|                            <div class="form-group">
552|                                <label for="finishLevel">Finish Level</label>
553|                                <select id="finishLevel" name="finishLevel" required>
554|                                    <option value="standard">Standard</option>
555|                                    <option value="premium" selected>Premium</option>
556|                                    <option value="luxury">Luxury</option>
557|                                </select>
558|                            </div>
559|                            
560|                            <button type="submit" class="btn btn-gold btn-full">Calculate Estimate</button>
561|                        </form>
562|                        
563|                        <div id="estimateResult" class="estimate-result hidden">
564|                            <p class="result-label">Estimated Range</p>
565|                            <p class="result-value" id="resultValue">$500,000 - $750,000</p>
566|                            <p class="result-disclaimer">This is a rough estimate only. Actual costs may vary based on specific project requirements, site conditions, materials, and current market conditions.</p>
567|                        </div>
568|                    </div>
569|                </div>
570|            </div>
571|        </section>
572|
573|        <!-- CTA Section -->
574|        <section class="section cta-section">
575|            <div class="container cta-content">
576|                <h2 class="cta-title">From Vision to Reality</h2>
577|                <p class="cta-subtitle">Let's build something exceptional together. Whether it's a custom home, commercial space, or renovation—we're ready when you are.</p>
578|                <div class="cta-buttons">
579|                    <a href="#contact" class="btn btn-gold btn-lg">
580|                        Get a Free Quote <i data-lucide="arrow-right"></i>
581|                    </a>
582|                    <a href="tel:+19809498800" class="btn btn-ghost btn-lg">
583|                        <i data-lucide="phone"></i>
584|                        980-949-8800
585|                    </a>
586|                </div>
587|            </div>
588|        </section>
589|
590|        <!-- Contact Section -->
591|        <section id="contact" class="section contact">
592|            <div class="container">
593|                <div class="contact-grid">
594|                    <div class="contact-info">
595|                        <p class="overline">Get In Touch</p>
596|                        <h2 class="section-title">Let's Build Together</h2>
597|                        <p class="contact-text">Ready to start your project? Fill out the form or reach out directly. We respond to all inquiries within 24 hours.</p>
598|                        
599|                        <div class="contact-methods">
600|                            <a href="tel:+19809498800" class="contact-method">
601|                                <div class="contact-icon">
602|                                    <i data-lucide="phone"></i>
603|                                </div>
604|                                <div class="contact-details">
605|                                    <span class="contact-label">Call Us</span>
606|                                    <span class="contact-value">980-949-8800</span>
607|                                </div>
608|                            </a>
609|                            
610|                            <a href="mailto:info@canelliconstruction.com" class="contact-method">
611|                                <div class="contact-icon">
612|                                    <i data-lucide="mail"></i>
613|                                </div>
614|                                <div class="contact-details">
615|                                    <span class="contact-label">Email Us</span>
616|                                    <span class="contact-value">info@canelliconstruction.com</span>
617|                                </div>
618|                            </a>
619|                            
620|                            <div class="contact-method">
621|                                <div class="contact-icon">
622|                                    <i data-lucide="map-pin"></i>
623|                                </div>
624|                                <div class="contact-details">
625|                                    <span class="contact-label">Location</span>
626|                                    <span class="contact-value">Charlotte, NC</span>
627|                                </div>
628|                            </div>
629|                        </div>
630|                        
631|                        <div class="map-wrapper">
632|                            <iframe 
633|                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208477.3910823091!2d-80.97608799999999!3d35.2270869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20NC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
634|                                width="100%" 
635|                                height="250" 
636|                                style="border:0;" 
637|                                allowfullscreen="" 
638|                                loading="lazy" 
639|                                referrerpolicy="no-referrer-when-downgrade"
640|                                class="map-iframe">
641|                            </iframe>
642|                        </div>
643|                    </div>
644|                    
645|                    <div class="contact-form-wrapper">
646|                        <h3 class="form-title">Request a Free Quote</h3>
647|                        <p class="form-subtitle">Tell us about your project and we'll get back to you within 24 hours.</p>
648|                        
649|                        <form id="contactForm" class="contact-form">
650|                            <div class="form-row">
651|                                <div class="form-group">
652|                                    <label for="name">Name</label>
653|                                    <input type="text" id="name" name="name" placeholder="Your Name" required>
654|                                </div>
655|                                <div class="form-group">
656|                                    <label for="phone">Phone</label>
657|                                    <input type="tel" id="phone" name="phone" placeholder="(704) 555-1234" required>
658|                                </div>
659|                            </div>
660|                            
661|                            <div class="form-group">
662|                                <label for="email">Email</label>
663|                                <input type="email" id="email" name="email" placeholder="you@email.com" required>
664|                            </div>
665|                            
666|                            <div class="form-group">
667|                                <label for="contactProjectType">Project Type</label>
668|                                <select id="contactProjectType" name="projectType" required>
669|                                    <option value="">Select project type</option>
670|                                    <option value="custom_home">Custom Home</option>
671|                                    <option value="turnkey">Turnkey Home</option>
672|                                    <option value="commercial">Commercial</option>
673|                                    <option value="remodel">Remodeling</option>
674|                                    <option value="adu">ADU Construction</option>
675|                                    <option value="addition">Home Addition</option>
676|                                    <option value="other">Other</option>
677|                                </select>
678|                            </div>
679|                            
680|                            <div class="form-group">
681|                                <label for="message">Message</label>
682|                                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
683|                            </div>
684|                            
685|                            <button type="submit" class="btn btn-gold btn-full">Send Message</button>
686|                        </form>
687|                        
688|                        <div id="formSuccess" class="form-success hidden">
689|                            <i data-lucide="check-circle"></i>
690|                            <p>Thank you! We'll be in touch shortly.</p>
691|                        </div>
692|                    </div>
693|                </div>
694|            </div>
695|        </section>
696|    </main>
697|
698|    <!-- Footer -->
699|    <footer class="footer">
700|        <div class="container">
701|            <div class="footer-grid">
702|                <div class="footer-brand">
703|                    <div class="footer-logo">
704|                        <span class="logo-text">Canelli</span>
705|                        <span class="logo-highlight">Construction</span>
706|                    </div>
707|                    <p class="footer-desc">Premium construction services in Charlotte, NC. Custom homes, commercial builds, and renovations delivered with excellence and transparency.</p>
708|                    <a href="tel:+19809498800" class="footer-phone">980-949-8800</a>
709|                </div>
710|                
711|                <div class="footer-links">
712|                    <h4 class="footer-title">Services</h4>
713|                    <ul>
714|                        <li><a href="#services">Custom Homes</a></li>
715|                        <li><a href="#services">Turnkey Homes</a></li>
716|                        <li><a href="#services">Commercial</a></li>
717|                        <li><a href="#services">Remodeling</a></li>
718|                        <li><a href="#services">ADU Construction</a></li>
719|                        <li><a href="#services">Home Additions</a></li>
720|                    </ul>
721|                </div>
722|                
723|                <div class="footer-links">
724|                    <h4 class="footer-title">Company</h4>
725|                    <ul>
726|                        <li><a href="#about">About</a></li>
727|                        <li><a href="#portfolio">Portfolio</a></li>
728|                        <li><a href="#process">Process</a></li>
729|                        <li><a href="#testimonials">Testimonials</a></li>
730|                        <li><a href="#contact">Contact</a></li>
731|                    </ul>
732|                </div>
733|            </div>
734|            
735|            <div class="footer-bottom">
736|                <p class="copyright">&copy; <span id="currentYear"></span> Canelli Construction. All rights reserved.</p>
737|                <p class="footer-location">Charlotte, NC • Licensed & Insured</p>
738|            </div>
739|        </div>
740|    </footer>
741|
742|    <script src="script.js"></script>
743|</body>
744|</html>
745|
[End of file]
