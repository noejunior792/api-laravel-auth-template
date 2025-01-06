import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, password_confirmation } = body;

    if (!name || !email || !password || !password_confirmation) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (password !== password_confirmation) {
      return NextResponse.json(
        { message: "Passwords do not match" },
        { status: 400 }
      );
    }

    const laravelResponse = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, password_confirmation }),
    });

    if (!laravelResponse.ok) {
      const laravelError = await laravelResponse.json();
      return NextResponse.json(
        { message: laravelError.message || "Failed to register" },
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
