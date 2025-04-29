import { Button } from "./components/ui/button"
import {
  ArrowRight,
  Brain,
  Sparkles,
  Users,
  FileText,
  Camera,
  History,
  BarChart,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import PrivacyPage from "./pages/PrivacyPage"
import TermsPage from "./pages/TermsPage"

// Import images directly
import rainImage from "./assets/rain.png"
import htpImage from "./assets/htp.jpg"
import kineticImage from "./assets/kinetic.png"

// Use imported images in the array
const carouselImages = [rainImage, htpImage, kineticImage]

// Extracted Home Page Content Component
function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handlers for carousel navigation
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 right-40 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="block">AI-Powered Drawing Analysis</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600">
                For Psychologists
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              PsychDraw is a mobile app designed for clinicians. Capture client drawings, get
              AI-driven insights using advanced AI, generate reports, and track progress over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white text-lg px-8 py-6 font-semibold shadow-lg">
                <a href="https://app.psychdraw.com">
                  Analyze a Drawing <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50 text-lg px-8 py-6"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-2xl transform rotate-6 scale-105 opacity-20 blur-lg"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl overflow-hidden border border-purple-100">
                {/* Carousel Container */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-purple-100 to-indigo-50 rounded-lg mb-4 relative group">
                  {/* Image */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg">
                    <img
                      src={carouselImages[currentImageIndex]} // Use state for src
                      alt={`PsychDraw analysis example ${currentImageIndex + 1}`} // Dynamic alt text
                      className="object-cover h-full w-full transition-opacity duration-300 ease-in-out"
                      key={currentImageIndex} // Add key for transitions
                    />
                  </div>

                  {/* Previous Button */}
                  <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white p-1 rounded-full transition-all duration-200 ease-in-out hover:bg-black/60 active:bg-black/70 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white p-1 rounded-full transition-all duration-200 ease-in-out hover:bg-black/60 active:bg-black/70 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          currentImageIndex === index ? "bg-fuchsia-600" : "bg-gray-400/50 hover:bg-gray-500/50"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Top Right Sparkle Icon (optional) */}
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full">
                    <Sparkles className="h-5 w-5 text-fuchsia-600" />
                  </div>
                </div>
                {/* Rest of the card content */}
                <div className="space-y-3">
                  <div className="h-3 bg-gradient-to-r from-fuchsia-200 to-purple-100 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gradient-to-r from-fuchsia-200 to-purple-100 rounded-full w-1/2"></div>
                  <div className="h-3 bg-gradient-to-r from-fuchsia-200 to-purple-100 rounded-full w-5/6"></div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center">
                      <Brain className="h-4 w-4 text-fuchsia-600" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Camera className="h-4 w-4 text-indigo-600" />
                    </div>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white">
                    View Report
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center animate-float">
              <Brain className="h-10 w-10 text-purple-600" />
            </div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center animate-float animation-delay-2000">
              <FileText className="h-8 w-8 text-fuchsia-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600">
              Enhance Your Clinical Practice
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Streamline projective drawing analysis and gain deeper client insights with PsychDraw's core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-10 w-10 text-fuchsia-600" />,
              title: "Client Management",
              description:
                "Organize your patients easily. Add new clients and access their history with a few taps.",
            },
            {
              icon: <Camera className="h-10 w-10 text-purple-600" />,
              title: "Easy Drawing Capture",
              description:
                "Use the integrated camera to quickly capture client drawings or upload existing images from the gallery.",
            },
            {
              icon: <Sparkles className="h-10 w-10 text-indigo-600" />,
              title: "AI-Powered Analysis",
              description:
                "Leverage advanced AI to analyze drawings for patterns, symbols, and potential clinical indicators.",
            },
            {
              icon: <FileText className="h-10 w-10 text-fuchsia-600" />,
              title: "Professional Reporting",
              description:
                "Generate clear, concise reports summarizing AI findings and providing suggestions for clinical focus.",
            },
            {
              icon: <History className="h-10 w-10 text-purple-600" />,
              title: "Client History Tracking",
              description:
                "Securely store all analyses for each client, building a valuable longitudinal record.",
            },
            {
              icon: <BarChart className="h-10 w-10 text-indigo-600" />,
              title: "Longitudinal Insights",
              description:
                "Observe themes and changes over time by reviewing past analyses and reports for each client.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100 transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-fuchsia-900/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600">
                Simple Workflow for Clinicians
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Capture, Analyze, and Report in three straightforward steps within the mobile app.
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  number: "01",
                  title: "Capture",
                  description:
                    "Use your phone's camera to photograph the client's drawing (e.g., HTP, DAP) or upload an image.",
                },
                {
                  number: "02",
                  title: "Analyze",
                  description:
                    "PsychDraw's AI processes the image, identifying key elements, patterns, and potential indicators based on psychological drawing analysis principles.",
                },
                {
                  number: "03",
                  title: "Report",
                  description:
                    "Receive a structured report with AI-generated insights and clinical suggestions, saved automatically to the client's history.",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 h-full">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    <div className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">{step.title}</h3>
                      <p className="text-gray-700 text-center">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600">
              Trusted by Clinicians
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Hear how PsychDraw is assisting psychologists and therapists in their practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote:
                "PsychDraw helps visualize patterns in my clients' drawings I might have missed. It's a great tool to supplement clinical judgment.",
              name: "Sarah J.",
              role: "Art Therapist",
            },
            {
              quote:
                "I use this with my patients to break through communication barriers. The AI insights are remarkably accurate and help guide our sessions.",
              name: "Dr. Michael Chen",
              role: "Clinical Psychologist",
            },
            {
              quote:
                "Generating initial reports is much faster now. It gives me a solid starting point for discussion with my clients about their artwork.",
              name: "Emily R.",
              role: "Licensed Professional Counselor",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 relative">
              <div className="absolute -top-5 -left-5 text-6xl text-fuchsia-200 font-serif">"</div>
              <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-400 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section - New Structure */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Select the plan that best fits your clinical practice needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] relative">
            <div className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Free</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600 mb-1">/month</span>
              </div>
              <p className="text-gray-700 mb-6 min-h-[40px]">Ideal for trying out core analysis features.</p>

              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "3 drawing analyses per month",
                  "Basic AI Analysis Reports",
                  "Manage up to 10 Clients",
                  "Limited Report History (5 per client)",
                  "Standard Email Support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-fuchsia-600 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 mt-auto">
                Get Started
              </Button>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] relative">
            <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-bl-lg text-white text-sm font-medium">
              Most Popular
            </div>
            <div className="p-8 text-white flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold">$10</span>
                <span className="opacity-90 mb-1">USD/month</span>
              </div>
              <p className="text-sm opacity-80 mb-6">(approx. $199 MXN)</p>
              <p className="opacity-90 mb-6 min-h-[40px]">Unlock comprehensive insights and unlimited potential for your practice.</p>

              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Unlimited drawing analyses",
                  "Advanced AI Professional Reports",
                  "In-depth Pattern & Symbol Identification",
                  "Unlimited Clients",
                  "Unlimited Client History Storage",
                  "Export Reports (PDF, DOCX)",
                  "Priority Support & Early Access",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-white w-4 h-4" />
                    </div>
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-white hover:bg-gray-100 text-fuchsia-600 mt-auto">
                Start Premium
              </Button>
            </div>
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/90 to-purple-600/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Enhance Your Practice?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Start streamlining your drawing analysis today. Get AI-powered insights and enhance your clinical workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-fuchsia-600 hover:bg-gray-100 text-lg px-8 py-6">
              <a href="https://app.psychdraw.com">
                Get Started Today
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

// Main App Component (Layout)
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2"> {/* Use Link */}
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-fuchsia-600 rounded-full opacity-70 animate-pulse"></div>
            <Brain className="relative z-10 w-10 h-10 text-white" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-violet-800">
            PsychDraw
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {/* Use anchor links for same-page sections if HomePage is complex */}
          {/* Or use Links if Features/HowItWorks become separate pages later */}
          <a href="/#features" className="text-gray-700 hover:text-fuchsia-600 transition">
            Features
          </a>
          <a href="/#how-it-works" className="text-gray-700 hover:text-fuchsia-600 transition">
            How It Works
          </a>
          <a href="/#testimonials" className="text-gray-700 hover:text-fuchsia-600 transition">
            For Psychologists
          </a>
          <a href="/#pricing" className="text-gray-700 hover:text-fuchsia-600 transition">
            Pricing
          </a>
        </div>
        <Button asChild variant="outline" className="border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50">
          <a href="https://app.psychdraw.com">
            Login / Sign Up
          </a>
        </Button>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          {/* Add other routes here if needed */}
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="relative w-8 h-8">
                <Brain className="w-8 h-8 text-fuchsia-600" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-violet-800">
                PsychDraw
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
              <a href="/#features" className="text-gray-700 hover:text-fuchsia-600 transition">Features</a>
              <a href="/#how-it-works" className="text-gray-700 hover:text-fuchsia-600 transition">How It Works</a>
              <a href="/#testimonials" className="text-gray-700 hover:text-fuchsia-600 transition">For Clinicians</a>
              <a href="/#pricing" className="text-gray-700 hover:text-fuchsia-600 transition">Pricing</a>
              <Link to="/privacy" className="text-gray-700 hover:text-fuchsia-600 transition">Privacy</Link>
              <Link to="/terms" className="text-gray-700 hover:text-fuchsia-600 transition">Terms</Link>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full text-gray-700 hover:text-fuchsia-600 hover:bg-fuchsia-50">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-700 hover:text-fuchsia-600 hover:bg-fuchsia-50">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-700 hover:text-fuchsia-600 hover:bg-fuchsia-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>© {new Date().getFullYear()} PsychDraw. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
