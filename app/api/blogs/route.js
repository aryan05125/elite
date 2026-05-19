import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      title: "AI Automation",
      description: "Powerful AI workflow automation.",
    },
  ]);
}