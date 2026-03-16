import { NextResponse } from "next/server";

export async function GET() {

  const eligible = Math.random() > 0.5;

  return NextResponse.json({
    eligible
  });

}