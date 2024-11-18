import { NextResponse } from "next/server";
import postData from "@/app/app/lib/googlesheetHandler";

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON data
    const data = await request.json();

    // Example: Perform some action with the data (logging here)
    console.log("Received data:", data);
    try {
      const res = await postData(data);
      return NextResponse.json(
        { message: "Data received successfully", data },
        { status: 200 }
      );
    } catch (error) {
      // Example: Return a success response
      return NextResponse.json(
        { message: "Failed to submit data", error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
