"use client";

import Link from "next/link";

interface SidebarProps {
  title?: string;
}

export function Sidebar({ title = "Navigation" }: SidebarProps) {
  return (
    <aside className="w-64 border-r bg-background">
      <div className="p-6">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </aside>
  );
}
