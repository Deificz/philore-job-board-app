"use client";

import Loader from "@/components/ui/loader";
import React, { createContext, ReactNode, useContext, useState } from "react";

type LoaderContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: ReactNode;
};

export const LoaderContext = createContext<LoaderContextType | undefined>(
  undefined,
);

export default function LoaderProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}
