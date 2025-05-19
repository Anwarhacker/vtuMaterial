// src/auth.js
export const getUser = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

export const login = (role) => {
  localStorage.setItem("user", JSON.stringify({ role }));
};

export const logout = () => {
  localStorage.removeItem("user");
};
