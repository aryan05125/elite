import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      title: "EliteAI Blog",
      description: "AI automation and innovation",
    },
  ]);
}