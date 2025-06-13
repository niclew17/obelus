import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { MessageCircle, Search, Star, Users, Shield, Zap } from "lucide-react";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Obelus Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the future of product reviews through intelligent
              conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Tell Your Story",
                description:
                  "Share your product experiences through natural conversation",
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "Learn & Discover",
                description:
                  "Get personalized product insights and recommendations",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Smart Reviews",
                description:
                  "AI-powered analysis of authentic user experiences",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Obelus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the conversation revolution and make better purchasing
              decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Instant Insights",
                description: "Get immediate answers about any product",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Authentic Reviews",
                description: "Real experiences from verified users",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Driven",
                description: "Learn from a growing community of reviewers",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-purple-100">Reviews Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5K+</div>
              <div className="text-purple-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1K+</div>
              <div className="text-purple-100">Products Covered</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
