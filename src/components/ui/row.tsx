import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Row = ({ children, className }: Props) => {
  return <div className={cn("flex flex-row", className)}>{children}</div>;
};
