"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("slevinas@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Contact Me
        </h1>

        <div className="space-y-8">
          <p>
            I am a Full-Stack Web Developer with a passion for building scalable
            applications using Next.js, Supabase, PostgreSQL, and modern
            frontend technologies.
          </p>
        </div>

        <div>
          <div className="flex justify-center mt-4 gap-4">
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3 bg-accent-500 text-primary-800 font-semibold rounded-lg hover:bg-accent-600 transition"
            >
              {copied ? "Email Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
