const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export const searchVideos = async (query) => {
  try {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

    if (!API_KEY) {
      console.error("❌ Missing YouTube API Key in .env file");
      return [];
    }

    const url = `${BASE_URL}?part=snippet&q=${encodeURIComponent(
      query
    )}&type=video&maxResults=10&key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.items) {
      return [];
    }

    return data.items;
  } catch (error) {
    console.error("YouTube API Fetch error:", error);
    return [];
  }
};
