"use client";
import { createContext, useContext, useState } from "react";

// 1. Create the context
const ViewContext = createContext();

// 2. Provider component
export function ViewProvider({ children }) {
  // Default view can be "Home"
  const [currentView, setCurrentView] = useState("Home");

  // Optional: helper to switch views
  const changeView = (viewName) => setCurrentView(viewName);

  return (
    <ViewContext.Provider value={{ currentView, changeView }}>
      {children}
    </ViewContext.Provider>
  );
}

// 3. Custom hook to use the context
export function useView() {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
}
