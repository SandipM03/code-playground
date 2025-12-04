"use client";

import { ReactNode } from "react";

interface ComponentPreviewProps {
  children: ReactNode;
  className?: string;
}

export function ComponentPreview({ children, className = "" }: ComponentPreviewProps) {
  return (
    <div className={`flex items-center justify-center min-h-[200px] rounded-lg border bg-background p-8 ${className}`}>
      {children}
    </div>
  );
}
