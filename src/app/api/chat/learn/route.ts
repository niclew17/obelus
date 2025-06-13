import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    // Simulate AI response for learn mode
    // In a real implementation, this would connect to your AI service
    const responses = [
      "Based on your interest, I'd recommend checking out products with high user ratings and positive reviews.",
      "Here are some key features to look for when choosing that type of product...",
      "Many users have found success with products that offer these specific benefits.",
      "Let me help you understand the differences between these popular options.",
      "Based on current trends and user feedback, here's what I'd suggest...",
    ];

    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];

    // Add a delay to simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      response: `${randomResponse} You asked: "${message}". This is the Learn mode - I'm focused on helping you discover and understand products.`,
      mode: "learn",
    });
  } catch (error) {
    console.error("Error in learn chat:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 },
    );
  }
}
