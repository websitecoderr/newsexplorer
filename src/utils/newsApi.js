const DEV_URL = "https://newsapi.org/v2/everything";
const PROD_URL = "https://nomoreparties.co/news/v2/everything";

const BASE_URL = window.location.hostname === "localhost" ? DEV_URL : PROD_URL;

const API_KEY =
  import.meta.env.VITE_NEWS_API_KEY || "0ae22c0a6e884ff99fdc04c8959d80e3";

const PAGE_SIZE = 100;

/**
 * @param {number} offsetDays -
 */
const getDateString = (offsetDays = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - offsetDays);
  return date.toISOString().split("T")[0];
};

/**
 * @param {string} query
 * @returns {Promise<Array>}
 */
export const fetchNewsArticles = async (query) => {
  const from = getDateString(14);
  const to = getDateString(7);

  const url = `${BASE_URL}?q=${encodeURIComponent(
    query
  )}&from=${from}&to=${to}&pageSize=${PAGE_SIZE}&apiKey=${encodeURIComponent(
    API_KEY
  )}&language=en`;

  console.log("Request URL:", url); // Debug the URL

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `News API error: ${errorData.message || response.statusText} (Status: ${
          response.status
        })`
      );
    }

    const data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      throw new Error("No articles found for this query.");
    }

    return data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.urlToImage,
      date: article.publishedAt,
      source: article.source.name,
    }));
  } catch (error) {
    console.error("Error fetching news:", error.message);
    throw error;
  }
};
