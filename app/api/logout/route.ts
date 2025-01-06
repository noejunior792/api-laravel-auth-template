import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Authorization token is required" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1]; 

    const laravelResponse = await fetch("http://127.0.0.1:8000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Envia o token para o Laravel
      },
    });

    if (!laravelResponse.ok) {
      const laravelError = await laravelResponse.json();
      return NextResponse.json(
        { message: laravelError.message || "Failed to log out" },
        { status: laravelResponse.status }
      );
    }

    return NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
