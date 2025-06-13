import { redirect } from "next/navigation";
import { createClient } from "../../supabase/server";
import DashboardNavbar from "@/components/dashboard-navbar";
import { MessageCircle, Search, History, User } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If user is not authenticated, show the dashboard but redirect to sign-in on button clicks
  if (!user) {
    return (
      <>
        <DashboardNavbar />
        <main className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container mx-auto px-4 py-8">
            {/* Welcome Header */}
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to <span className="text-purple-600">Obelus</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                What would you like to do today? Share your experiences or
                discover new products.
              </p>
            </header>

            {/* Main Action Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {/* Tell Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Tell
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Share your product experiences through natural conversation.
                    Help others make better decisions.
                  </p>
                  <Link
                    href="/sign-in?redirect=/dashboard"
                    className="block w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center"
                  >
                    Start Sharing
                  </Link>
                </div>
              </div>

              {/* Learn Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Learn
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Get personalized product insights and recommendations
                    through intelligent conversations.
                  </p>
                  <Link
                    href="/sign-in?redirect=/dashboard"
                    className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Access Section */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Quick Access
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/sign-in?redirect=/dashboard"
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border flex items-center gap-3"
                >
                  <History className="w-5 h-5 text-gray-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Conversation History
                    </h4>
                    <p className="text-sm text-gray-600">
                      View your past conversations
                    </p>
                  </div>
                </Link>
                <Link
                  href="/sign-in?redirect=/dashboard"
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border flex items-center gap-3"
                >
                  <User className="w-5 h-5 text-gray-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Profile Settings
                    </h4>
                    <p className="text-sm text-gray-600">Manage your account</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  // If user is authenticated, redirect to dashboard
  return redirect("/dashboard");
}
