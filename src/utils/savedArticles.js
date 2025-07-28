const STORAGE_KEY = "savedArticles";

/**
 *
 * @returns {Array}
 */
export const getSavedArticles = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

/**
 *
 * @param {Object} article
 * @returns {Array}
 */
export const saveArticle = (article) => {
  const current = getSavedArticles();
  const updated = [...current, article];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

/**
 *
 * @param {number} index -
 * @returns {Array}
 */
export const removeArticle = (index) => {
  const current = getSavedArticles();
  const updated = current.filter((_, i) => i !== index);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

/**
 */
export const clearSavedArticles = () => {
  localStorage.removeItem(STORAGE_KEY);
};
