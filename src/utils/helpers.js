/**
 *
 *
 */
export const formatDate = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 *
 *
 */
export const truncateText = (text, maxLength = 140) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
};

/**
 *
 *
 */
export const isValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

/**
 *
 *
 */
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 *
 *
 */
export const getDomainFromUrl = (url) => {
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

/**
 *
 *
 */
export const highlightKeyword = (text, keyword) => {
  if (!text || !keyword) return text;
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
};
