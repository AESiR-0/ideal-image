const API_URL = "http://api.idealimage.com/";

/**
 * Pushes form data to the API.
 * @param {Object} formData - The form data to be sent to the API.
 * @returns {Promise<Object>} The response from the API.
 */
const pushToAPI = async (formData: Record<string, any>) => {
  try {
    const payload = {
      prospect_id: formData.prospectId,
      metas: [
        { key: "firstName", value: formData.firstName, type: "explicit" },
        { key: "lastName", value: formData.lastName, type: "explicit" },
        { key: "flow", value: "franchise-lhr", type: "implicit" },
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

    const response = await fetch(API_URL, {
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
    return result; // Return the API response
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
