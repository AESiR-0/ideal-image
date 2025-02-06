import { google } from "googleapis";

// Update FormData type to include all required fields
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  zipCode: string;
  phone: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  pageURL: string;
};

export default async function postData(values: FormData) {
  const {
    firstName,
    lastName,
    email,
    zipCode,
    phone,
    utmSource,
    utmMedium,
    utmCampaign,
    utmTerm,
    pageURL,
  } = values;

  // Auth setup
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = "1jFcrxwNDIUm3A9TlIz2k01bY6WA9VouLZl9zUZiepcM";
  
  // Determine which sheet to use based on the URL
  let sheetName = "Laser Hair Removal"; // default sheet
  if (pageURL.includes("coolsculpting")) {
    sheetName = "Coolsculpting";
  } else if (pageURL.includes("botox")) {
    sheetName = "Botox";
  }
  
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetName, // Using the determined sheet name
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            firstName,
            lastName,
            email,
            zipCode,
            phone,
            utmSource || "N/A",
            utmMedium || "N/A",
            utmCampaign || "N/A",
            utmTerm || "N/A",
            pageURL,
          ],
        ],
      },
    });

    console.log("Data successfully appended:", response.data);
    return "Data successfully added to Google Sheet";
  } catch (error: any) {
    console.error("Error appending data to Google Sheets:", error);
    throw new Error(
      error.response?.data?.error?.message ||
        "Failed to add data to Google Sheet"
    );
  }
}
