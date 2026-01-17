import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export const Col = ({ children, className }: Props) => {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
};
