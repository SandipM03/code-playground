import { Sidebar } from "@/components/sidebar";
import { DocsSidebar } from "@/components/docs-sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Comprehensive documentation for our UI component library",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <main className="flex-1 px-8 py-6 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}
