import { NextRequest, NextResponse } from "next/server";
import socials from './data.json';

export async function GET(request: NextRequest) {
  return NextResponse.json(socials, { status: 200 });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
