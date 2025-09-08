import {
  mockUser,
  mockLoginResponse,
  mockTokenValidationResponse,
  mockError,
} from "./mockData";

export const login = async ({ email, password }) => {
  if (email === mockUser.email && password === mockUser.password) {
    localStorage.setItem("jwt", mockUser.token);
    return mockLoginResponse;
  } else {
    throw new Error(mockError.login);
  }
};

export const register = async ({ email, password, name }) => {
  if (email === mockUser.email) {
    throw new Error(mockError.register);
  }
  return {
    user: { name, email },
    token: "new-mock-token",
  };
};

export const checkToken = async () => {
  const token = localStorage.getItem("jwt");
  if (token === mockUser.token) {
    return mockTokenValidationResponse;
  } else {
    throw new Error(mockError.token);
  }
};

export const logout = () => {
  localStorage.removeItem("jwt");
  return Promise.resolve();
};
