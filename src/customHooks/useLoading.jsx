import React from "react";
import { createContext, useContext, useState } from "react";
import Loading from "../components/loading";

// Create Context
const LoadingContext = createContext();

// Create a Provider component
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
      {loading && <Loading />}
    </LoadingContext.Provider>
  );
};

// Custom hook for using the loading context
export const useLoading = () => useContext(LoadingContext);
