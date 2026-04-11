import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
  });
  const navigate = useNavigate();

  const login = (token) => {
    setUser(token);
    localStorage.setItem("token", JSON.stringify(token));
    //make this navigate to home page after login
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
