import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { name: "Rana", points: 120 },
    { name: "User2", points: 95 },
    { name: "User3", points: 80 }
  ]);
}