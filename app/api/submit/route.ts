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

    // Pass user data to the thankyou page via query parameters
    const thankYouUrl = new URL(
      data.pageURL.includes(
        "https://www.idealimage-aesthetics.com/coolsculpting-elite"
      )
        ? "/coolsculpting-elite/thankyou"
        : data.pageURL.includes(
            "https://www.idealimage-aesthetics.com/coolsculpting"
          )
        ? "/coolsculpting/thankyou"
        : "/thankyou",
      request.url
    );
    thankYouUrl.searchParams.set("email", data.email);
    thankYouUrl.searchParams.set("phone", `${data.countryCode}${data.phone}`);

    return NextResponse.redirect(thankYouUrl.toString());
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
