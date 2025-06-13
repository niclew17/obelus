import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    // Simulate AI response for tell mode
    // In a real implementation, this would connect to your AI service
    const responses = [
      "Thank you for sharing your experience! That's really valuable feedback.",
      "I appreciate you taking the time to tell me about that product.",
      "Your review will help other users make better decisions.",
      "That's an interesting perspective. Can you tell me more about your experience?",
      "Thanks for the detailed review! Other users will find this helpful.",
    ];

    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];

    // Add a delay to simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      response: `${randomResponse} You shared: "${message}". This is the Tell mode - I'm here to collect and understand your product experiences.`,
      mode: "tell",
    });
  } catch (error) {
    console.error("Error in tell chat:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 },
    );
  }
}
