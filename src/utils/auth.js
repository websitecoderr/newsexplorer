const BASE_URL = "https://your-backend-api.com";

/**
 *
 * @param {Object} userData
 * @returns {Promise<Object>}
 */
export const register = async ({ email, password, name }) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Registration failed");
  }

  return res.json();
};

/**
 *
 * @param {Object} credentials
 * @returns {Promise<void>}
 */
export const login = async ({ email, password }) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Login failed");
  }

  const data = await res.json();
  localStorage.setItem("jwt", data.token);
};

/**
 *
 * @returns {Promise<Object>}
 */
export const checkToken = async () => {
  const token = localStorage.getItem("jwt");
  if (!token) throw new Error("No token found");

  const res = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Token validation failed");
  }

  return res.json();
};

/**
 *
 */
export const logout = () => {
  localStorage.removeItem("jwt");
  return Promise.resolve();
};
