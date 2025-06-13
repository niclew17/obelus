import Link from "next/link";
import { MessageCircle, Search, Check } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Reviews{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Reimagined
              </span>{" "}
              Through Conversation
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Share your experiences and discover products through intelligent
              conversations. Get personalized insights that matter to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-8 py-4 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors text-lg font-medium"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Tell Your Story
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center px-8 py-4 text-purple-700 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors text-lg font-medium"
              >
                <Search className="mr-2 w-5 h-5" />
                Learn & Discover
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Free to use</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>AI-powered insights</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Community driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
