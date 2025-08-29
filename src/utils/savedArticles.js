const BASE_URL = "https://your-api-domain.com/api"; 

/**
 * 
 * @returns {string|null}
 */
const token = () => localStorage.getItem("token");

/**
 * 
 * @param {Object} article 
 * @returns {Promise<Object>} 
 */
export async function saveArticleAPI(article) {
  try {
    const res = await fetch(`${BASE_URL}/saved-articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(article),
    });

    if (!res.ok) throw new Error("Failed to save article");
    return await res.json();
  } catch (err) {
    console.error("saveArticleAPI error:", err);
    return { error: err.message };
  }
}

/**
 * 
 * @param {string} articleId 
 * @returns {Promise<boolean>} 
 */
export async function deleteArticleAPI(articleId) {
  try {
    const res = await fetch(`${BASE_URL}/saved-articles/${articleId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    });

    return res.ok;
  } catch (err) {
    console.error("deleteArticleAPI error:", err);
    return false;
  }
}
