
import React, { createContext, useState, useContext, useEffect } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
} | null;

type Admin = {
  isLoggedIn: boolean;
  name: string;
  email: string;
} | null;

interface AuthContextType {
  user: User;
  admin: Admin;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (userData: any) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [admin, setAdmin] = useState<Admin>(null);
  
  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("fablabCurrentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    // Check for stored admin session
    const storedAdmin = localStorage.getItem("fablabAdmin");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
  }, []);
  
  const login = async (email: string, password: string): Promise<boolean> => {
    // This is a simplified example for demonstration
    // In a real app, you would call an API
    
    try {
      // Check for admin
      if (email === "admin@fablab.ma" && password === "Admin@123") {
        const adminData = { isLoggedIn: true, name: "Admin", email };
        localStorage.setItem("fablabAdmin", JSON.stringify(adminData));
        setAdmin(adminData);
        return true;
      }
      
      // Check for user
      const users = JSON.parse(localStorage.getItem("fablabUsers") || "[]");
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (foundUser) {
        const userData = {
          id: foundUser.id,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          email: foundUser.email,
          role: foundUser.role,
        };
        
        localStorage.setItem("fablabCurrentUser", JSON.stringify(userData));
        setUser(userData);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };
  
  const signup = async (userData: any): Promise<boolean> => {
    try {
      // In a real app, this would be an API call
      const users = JSON.parse(localStorage.getItem("fablabUsers") || "[]");
      
      // Check if user already exists
      if (users.some((u: any) => u.email === userData.email)) {
        return false;
      }
      
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        role: "user",
        createdAt: new Date().toISOString(),
      };
      
      users.push(newUser);
      localStorage.setItem("fablabUsers", JSON.stringify(users));
      
      // Auto-login after signup
      const userData2Login = {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
      };
      
      localStorage.setItem("fablabCurrentUser", JSON.stringify(userData2Login));
      setUser(userData2Login);
      
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  };
  
  const logout = () => {
    if (user) {
      localStorage.removeItem("fablabCurrentUser");
      setUser(null);
    }
    
    if (admin) {
      localStorage.removeItem("fablabAdmin");
      setAdmin(null);
    }
  };
  
  const isAuthenticated = !!user || !!admin;
  const isAdmin = !!admin;
  
  return (
    <AuthContext.Provider 
      value={{
        user,
        admin,
        isAuthenticated,
        isAdmin,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
