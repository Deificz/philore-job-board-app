"use client";

import React, { createContext, ReactNode, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  children: ReactNode;
};

type Notif = {
  id?: string;
  message: string;
  bg?: string;
  color?: string;
  type?: string;
};

type NotifContextType = {
  open: (options: Notif) => void;
  close: (id: string) => void;
};

const NotifContext = createContext<NotifContextType | undefined>(undefined);

export default function NotifProvider({ children }: Props) {
  const open = ({ id, message, type, bg, color }: Notif) => {
    switch (type) {
      case "success":
        toast.success(message, {
          id,
          style: {
            fontSize: "13px",
            color: "white",
            minWidth: "30px",
            padding: "10px 20px",
            backgroundColor: "oklch(62.7% 0.194 149.214)",
          },
          duration: 3000,
        });
        break;
      case "error":
        toast.error(message, {
          id,
          style: {
            fontSize: "13px",
            color: "white",
            minWidth: "30px",
            padding: "10px 20px",
            backgroundColor: "oklch(57.7% 0.245 27.325)",
          },
          duration: 3000,
        });
        break;
      default:
        toast.custom(() => <div className="w-30 h-30">{message}</div>, { id });
    }
  };
  const close = (id: string) => {
    toast.dismiss(id);
  };

  return (
    <NotifContext.Provider value={{ open, close }}>
      <Toaster position="top-right" />
      {children}
    </NotifContext.Provider>
  );
}

export function useNotif() {
  const context = useContext(NotifContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}
