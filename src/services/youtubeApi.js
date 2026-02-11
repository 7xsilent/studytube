import { YOUTUBE_API_KEY } from "../config";

const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export const searchVideos = async (query) => {
  try {
    const url = `${BASE_URL}?part=snippet&q=${encodeURIComponent(
      query
    )}&type=video&maxResults=10&key=${YOUTUBE_API_KEY}`;

    console.log("YouTube Request URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    console.log("YouTube API FULL RESPONSE:", data);

    if (!data.items) {
      return [];
    }

    return data.items;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};
