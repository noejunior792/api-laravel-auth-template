import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const laravelResponse = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!laravelResponse.ok) {
      const laravelError = await laravelResponse.json();
      return NextResponse.json(
        { message: laravelError.message || "Invalid login credentials" },
        { status: laravelResponse.status }
      );
    }

    const laravelData = await laravelResponse.json();

    return NextResponse.json(laravelData, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
