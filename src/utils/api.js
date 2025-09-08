const newsApiBaseUrl =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const getNews = async (query) => {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const params = new URLSearchParams({
    q: query,
    apiKey: apiKey,
    from: sevenDaysAgo.toISOString().split("T")[0],
    to: today.toISOString().split("T")[0],
    pageSize: 100,
  });

  try {
    const response = await fetch(`${newsApiBaseUrl}?${params}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.status === "error") {
      throw new Error(data.message || "API error");
    }
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export default getNews;
