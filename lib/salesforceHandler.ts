const BASE = "https://api.idealimage.com/";
// const BASE_Local = "https://api-dev01.puntpunt.fun/";

/**
 * Gets a prospect ID from the API.
 * @returns {Promise<string>} The prospect ID.
 */
interface Center {
  id: number;
  siteID: string;
  googlePlaceID: string;
  webName: string;
  showOnWebsite: number;
  corporate: number;
  identifier: string;
  googlePhone: string;
  centerFriendlyName: string;
  hoursOpenMonday: string | null;
  hoursOpenTuesday: string | null;
  hoursOpenWednesday: string | null;
  hoursOpenThursday: string | null;
  hoursOpenFriday: string | null;
  hoursOpenSaturday: string | null;
  hoursOpenSunday: string | null;
  hoursCloseMonday: string | null;
  hoursCloseTuesday: string | null;
  hoursCloseWednesday: string | null;
  hoursCloseThursday: string | null;
  hoursCloseFriday: string | null;
  hoursCloseSaturday: string | null;
  hoursCloseSunday: string | null;
  longitude: number;
  latitude: number;
  location: string;
  address1: string;
  address2: string | null;
  city: string;
  county: string;
  state: string;
  zip: string;
  Status: string;
  slug: string;
  centerType: string;
  uuid: string;
  maxRoutingRadius: number;
  opening_at: string;
  listing_at: string;
  routing_at: string;
  routeLeads: number;
  customTitle: string;
  customDescription: string;
  reputationSiteKey: string;
  reviewsCount: number;
  reviewsAverage: number;
}


// const getSiteId = async ({ identifierCenter }: { identifierCenter: string }): Promise<string> => {
//   const response = await fetch((BASE + "v1/center/identifier/" + identifierCenter));
//   const result = await response.json();
//   return result.siteID;
// }
const checkNearestCenter = (nearestCenter: Center): boolean => {
  if (nearestCenter.centerType === "Franchise" || nearestCenter.centerType === "franchise")
    return true;
  return false;
}

const getNearestCenter = async ({ zipCode }: { zipCode: any }): Promise<string> => {
  try {
    const response = await fetch((BASE + `v1/centers/zip/${zipCode}/200?cache=true`));
    const result: { data: Center[] } = await response.json();
    let nearest = ""

    if (result.data.length === 0)
      return '';
    else {
      for (let i = 0; i < result.data.length; i++) {
        if (checkNearestCenter(result.data[i])) {
          nearest = result.data[i].siteID;
          break;
        }
      }
    }
    return nearest;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const generateLead = async (prospectId: string): Promise<string> => {
  try {
    const response = await fetch((BASE + "v2/prospect/" + prospectId + "/lead"), {
      method: "GET",
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
    let flag = false;
    const zipCode = formData.zipCode;
    const nearestCenter = await getNearestCenter({ zipCode });
    console.log('nearestCenter', nearestCenter);
    
    // Determine service type code based on URL
    let serviceTypeCode = "108"; // default for Laser Hair Removal
    if (formData.pageURL.includes("coolsculpting")) {
      serviceTypeCode = "127";
    } else if (formData.pageURL.includes("botox")) {
      serviceTypeCode = "149";
    }

    if (nearestCenter === '') {
      flag = false;
    } else {
      flag = true;
    }

    let payload = {}
    if (flag) {
      payload = {
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
          { key: "serviceTypeCode", value: serviceTypeCode, type: "implicit" },
          { key: "zipcode", value: formData.zipCode, type: "explicit" },
          {
            key: "siteId",
            value: nearestCenter,
            type: "explicit",
          },
          { key: "wantsContact", value: true, type: "explicit" },
        ],
      };
    } else {
      payload = {
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
          { key: "serviceTypeCode", value: serviceTypeCode, type: "implicit" },
          { key: "zipcode", value: formData.zipCode, type: "explicit" },
          { key: "wantsContact", value: true, type: "explicit" },
        ],
      }
    }

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


// distance in miles after zipcode 