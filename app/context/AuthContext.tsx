"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { User } from "../types/auth";

interface AuthContextType {
  user: User | null;
  error: string | null;
  register: (name: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load from localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("foa-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // REGISTER
  const register = (name: string, email: string, password: string) => {
    const newUser: User = {
      name,
      email,
      role: "customer",
    };

    // Save user (fake DB for now)
    localStorage.setItem("foa-user", JSON.stringify(newUser));
    setUser(newUser);
  };

  // LOGIN
  const login = (email: string, password: string) => {
    setError(null); // clear old errors
    const storedUser = localStorage.getItem("foa-user");

    if (!storedUser) {
      setError("User not found. Please register first.");
      return;
    }

    const parsedUser: User = JSON.parse(storedUser);

    if (parsedUser.email !== email) {
      setError("Invalid email");
      return;
    }

    if (parsedUser.password !== password) {
    setError("Invalid password");
    return;
  }

    setUser(parsedUser);
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("foa-user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
