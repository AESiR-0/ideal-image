const BASE = "https://api.idealimage.com/";

/**
 * Gets a prospect ID from the API.
 * @returns {Promise<string>} The prospect ID.
 */

const getSiteId = async ({ identifierCenter }: { identifierCenter: string }): Promise<string> => {
  const response = await fetch((BASE + "v1/center/identifier/" + identifierCenter));
  const result = await response.json();
  return result.siteID;
}


const generateLead = async (prospectId: string): Promise<string> => {
  try {
    const response = await fetch((BASE + "v1/prospect"), {
      method: "POST",
      body: JSON.stringify({
        prospect_id: prospectId
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    });

    // Log the response for debugging
    const responseText = await response.json();
    console.log('Prospect API Response:', responseText);

    if (!response.ok) {
      throw new Error(
        `Prospect API error: Status ${response.status} - ${response.statusText}\nResponse: ${responseText}`
      );
    }


    return responseText.id;
  }
  catch (e: any) {
    console.log(e);
    throw e;
  };
}
/**
 * Pushes form data to the API.
 * @param {Object} formData - The form data to be sent to the API.
 * @returns {Promise<Object>} The response from the API.
 */
const pushToAPI = async (formData: Record<string, any>) => {
  try {
    // First get the prospect ID
    // const prospectId = await getProspectId();
    const siteId = await getSiteId(formData.identifier);
    const payload = {
      // prospect_id: prospectId,
      metas: [
        { key: "firstName", value: formData.firstName, type: "explicit" },
        { key: "lastName", value: formData.lastName, type: "explicit" },
        { key: "flow", value: "paid-lhr", type: "implicit" },
        { key: "email", value: formData.email, type: "explicit" },
        {
          key: "telephone",
          value: `${formData.countryCode}${formData.phone}`,
          type: "explicit",
        },
        { key: "serviceTypeCode", value: "127", type: "implicit" },
        { key: "zipcode", value: formData.zipCode, type: "explicit" },
        {
          key: "siteId",
          value: "BA571C5F-2F80-47D2-9BA9-8C8DE7569042",
          type: "explicit",
        },
        { key: "wantsContact", value: true, type: "explicit" },
      ],
    };
    // console.log(prospectId);

    const response = await fetch((BASE + "v1/prospect"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.message || response.statusText}`);
    }

    const result = await response.json();
    const status = await generateLead(result.id);
    console.log('Prospect API Response:', status);
    return status; // Return the API response
  } catch (error) {
    console.error("Error pushing data to API:", error);
    if (error instanceof Error) {
      throw new Error(error.message || "Unknown API error");
    } else {
      throw new Error("Unknown API error");
    }
  }
};


export default pushToAPI;
