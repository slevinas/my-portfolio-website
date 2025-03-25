"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [showResume, setShowResume] = useState(false);

  function trackResumeDownload() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "resume_download", {
        event_category: "engagement",
        event_label: "Resume Download",
      });
    }
  }

  return (
    <section className="max-w-5xl mx-auto p-8 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src="/avatar.png"
          alt="Zigi profile picture"
          width={120}
          height={120}
          className="rounded-full border-4 border-accent-400 shadow-md"
        />
        <div>
          <h1 className="text-4xl font-bold text-accent-400">Zigi</h1>
          <h2 className="text-lg text-gray-500 dark:text-gray-400">
            Mechanical Engineer • Full-Stack Developer
          </h2>
          <p className="mt-2">
            Passionate about building fast, scalable apps with{" "}
            <strong>Next.js</strong>,<strong> Supabase</strong>, and{" "}
            <strong>PostgreSQL</strong>. I focus on clean code, good
            architecture, and smooth user experiences.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="https://github.com/slevinas">
              <Image src="/github.svg" alt="GitHub" width={24} height={24} />
            </Link>
            <Link href="https://linkedin.com/in/sagilevinas">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Summary */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-accent-400">
          Background & Skills
        </h2>
        <p className="mt-4">
          I pivoted from mechanical engineering to web development with a focus
          on:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Modern full-stack apps with React, Next.js & Tailwind CSS</li>
          <li>Backends powered by Supabase & PostgreSQL</li>
          <li>ETL tooling & Python scripting for QA & automation</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-accent-400">Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4">
          <Image src="/nextjs.svg" alt="Next.js" width={40} height={40} />
          <Image src="/react.svg" alt="React" width={40} height={40} />
          <Image src="/tailwind.svg" alt="TailwindCSS" width={40} height={40} />
          <Image src="/node-js.svg" alt="Node.js" width={40} height={40} />
          <Image
            src="/icons8-postgresql-24.png"
            alt="PostgreSQL"
            width={40}
            height={40}
          />
          <Image src="/amazon-aws-24.png" alt="AWS" width={40} height={40} />
          <Image src="/snowflake2.svg" alt="Snowflake" width={80} height={80} />
        </div>
      </div>

      {/* Resume Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-accent-400">
          Download My Resume
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Click below to get a copy of my latest resume.
        </p>
        <a
          href="/resume.pdf"
          download="Zigi_Resume.pdf"
          onClick={trackResumeDownload}
          className="inline-block mt-4 px-6 py-3 bg-accent-500 text-primary-800 font-semibold rounded-lg hover:bg-accent-600 transition"
        >
          Download Resume
        </a>

        <button
          onClick={() => setShowResume((prev) => !prev)}
          className="block mx-auto mt-4 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          {showResume ? "Hide Resume Preview" : "Show Resume Preview"}
        </button>

        {showResume && (
          <div className="mt-6">
            <iframe
              src="/resume.pdf"
              className="w-full h-[600px] border rounded-lg"
              title="Resume Viewer"
            ></iframe>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-accent-400">
          Let&apos;s Connect
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Interested in working together? Let’s have a chat.
        </p>
        <Link href="/contact">
          <button className="mt-4 px-6 py-3 bg-accent-500 text-primary-800 font-semibold rounded-lg hover:bg-accent-600 transition">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
}
