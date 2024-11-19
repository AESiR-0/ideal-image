import { google } from "googleapis";

// Update FormData type to include all required fields
type FormData = {
  fullName: string;
  lastName: string;
  email: string;
  zipCode: string;
  phoneNumber: string;
  // utmSource: string | null;
  // utmMedium: string | null;
  // utmCampaign: string | null;
  // utmTerm: string | null;
  // pageURL: string;
};

export default async function postData(values: FormData) {
  const {
    fullName,
    lastName,
    email,
    zipCode,
    phoneNumber,
    // utmSource,
    // utmMedium,
    // utmCampaign,
    // utmTerm,
    // pageURL,
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

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1:J1", // Update the sheet name and range if necessary
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            fullName,
            lastName,
            email,
            zipCode,
            phoneNumber,
            // utmSource || "N/A",
            // utmMedium || "N/A",
            // utmCampaign || "N/A",
            // utmTerm || "N/A",
            // pageURL,
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
// import { google } from "googleapis";

// type FormData = {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   experience: number;
//   jobTitle: string | null;
//   aboutExperience: string;
//   cv: string;
//   playlist: string;
//   favComic: string;
// };

// export default async function postData(values: FormData) {
//   const {
//     fullName,
//     email,
//     phoneNumber,
//     experience,
//     jobTitle,
//     playlist,
//     cv,
//     favComic,
//     aboutExperience,
//   } = values;

//   // Auth setup
//   const auth = new google.auth.GoogleAuth({
//     credentials: {
//       client_email: process.env.CLIENT_EMAIL,
//       private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
//     },
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });
//   const spreadsheetId = "1jFcrxwNDIUm3A9TlIz2k01bY6WA9VouLZl9zUZiepcM";

//   try {
//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range: "Sheet2!A1:Z1", // Update the sheet name and range if necessary
//       valueInputOption: "RAW",
//       requestBody: {
//         values: [
//           [
//             fullName,
//             email,
//             phoneNumber,
//             experience,
//             jobTitle,
//             aboutExperience,
//             cv,
//             favComic,
//             playlist,
//           ],
//         ],
//       },
//     });
//     console.log("Data successfully appended:", response.data);
//     return "Data successfully added to Google Sheet";
//   } catch (error) {
//     console.error("Error appending data to Google Sheets:", error);
//     throw error;
//   }
// }
