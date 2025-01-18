import { ArrowRight, Globe2, Languages, Video, Zap } from "lucide-react";
import { Link } from "react-router-dom";
function Home({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Share Your Stories in
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Every Language
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your content into multiple Indian languages instantly.
              Reach millions of readers across the country with our AI-powered
              translation platform.
            </p>
            <Link to={"/dashboard"}>
              <button
                onClick={onGetStarted}
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-medium text-lg flex items-center gap-2 mx-auto"
              >
                Start Writing Now
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.1),transparent_50%)]" />
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Everything You Need to Go Multilingual
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                10 Indian Languages
              </h3>
              <p className="text-gray-600">
                Translate your content into major Indian languages including
                Hindi, Tamil, Bengali, and more.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Video Transcription
              </h3>
              <p className="text-gray-600">
                Convert your video content into text automatically with our
                advanced AI transcription.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Translation
              </h3>
              <p className="text-gray-600">
                Get high-quality translations in seconds with our
                state-of-the-art AI translation engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Reach More Readers?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Start creating multilingual content today and connect with millions
            of readers across India.
          </p>
          <Link to={"/dashboard"}>
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all font-medium text-lg inline-flex items-center gap-2"
            >
              Get Started for Free
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default Home;
