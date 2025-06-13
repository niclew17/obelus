import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    // Simulate AI response for general mode
    // In a real implementation, this would connect to your AI service
    const responses = [
      "I'm here to help with both learning about products and collecting reviews.",
      "Feel free to ask me about products or share your experiences.",
      "I can help you discover new products or listen to your product reviews.",
      "Whether you want to learn or tell, I'm here to assist you.",
      "How can I help you today with products and reviews?",
    ];

    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];

    // Add a delay to simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      response: `${randomResponse} You said: "${message}". This is the general chat mode.`,
      mode: "general",
    });
  } catch (error) {
    console.error("Error in general chat:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 },
    );
  }
}
