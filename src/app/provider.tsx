import Header from "@/components/layout-components/Header";
import LoaderProvider from "@/contexts/LoaderProvider";
import NotifProvider from "@/contexts/NotifProvider";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootClientProvider({ children }: Props) {
  return (
    <LoaderProvider>
      <NotifProvider>
        <main className="flex flex-col min-h-screen">
          <Header/>
          {children}
        </main>
      </NotifProvider>
    </LoaderProvider>
  );
}
