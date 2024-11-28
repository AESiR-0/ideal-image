import { NextResponse } from "next/server";
import postData from "@/lib/googlesheetHandler";
import pushToSalesforce from "@/lib/salesforceHandler";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("Received data:", data);

    // Google Sheets Integration
    try {
      await postData(data);
    } catch (googleSheetError) {
      console.error("Google Sheets Error:", googleSheetError);
    }

    // Salesforce Integration
    try {
      const salesforceResponse = await pushToSalesforce(data);
      console.log("Salesforce Response:", salesforceResponse);
    } catch (salesforceError) {
      console.error("Salesforce Error:", salesforceError);
    }

    return NextResponse.json(
      { message: "Data processed successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
