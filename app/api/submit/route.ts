import { NextResponse } from "next/server";
import postData from "@/lib/googlesheetHandler";
import pushToSalesforce from "@/lib/salesforceHandler";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Received data:", data);

    let googleSheetSuccess = false;
    let salesforceSuccess = false;

    // Google Sheets Integration
    try {
      await postData(data);
      googleSheetSuccess = true;
    } catch (error) {
      console.error("Google Sheets Integration Failed:", error);
    }

    // Salesforce Integration
    try {
      const salesforceResponse = await pushToSalesforce(data);
      console.log("Salesforce Response:", salesforceResponse);
      salesforceSuccess = true;
    } catch (error) {
      console.error("Salesforce Integration Failed:", error);
    }

    // Redirect based on data.pageURL
    const thankYouUrl = new URL(
      data.pageURL.includes(
        "https://www.idealimage-aesthetics.com/coolsculpting-elite"
      )
        ? "/coolsculpting-elite/thankyou"
        : data.pageURL.includes(
            "https://www.idealimage-aesthetics.com/coolsculpting"
          )
        ? "/coolsculpting/thankyou"
        : "/thankyou", // Default fallback
      request.url
    );
    thankYouUrl.searchParams.set("email", data.email);
    thankYouUrl.searchParams.set("phone", `${data.countryCode}${data.phone}`);

    // Log and return status for integrations
    console.log("Google Sheets Success:", googleSheetSuccess);
    console.log("Salesforce Success:", salesforceSuccess);

    return NextResponse.redirect(thankYouUrl.toString());
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
