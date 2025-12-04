"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 text-xs rounded-md bg-background border hover:bg-accent"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
