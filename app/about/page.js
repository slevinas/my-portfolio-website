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
    <section className="max-w-5xl mx-auto px-6 py-12 text-primary-900 dark:text-white">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          src="/avatar.png"
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full border-4 border-accent-400 shadow-md"
        />
        <div>
          <h1 className="text-4xl font-semibold text-accent-500 dark:text-accent-400">
            Zigi
          </h1>
          <h2 className="text-lg text-gray-600 dark:text-gray-400">
            Mechanical Engineer, Full-Stack Web Developer
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Passionate about building scalable applications with{" "}
            <strong>Next.js, Supabase, PostgreSQL</strong>, and modern frontend
            technologies.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <Link
              href="https://github.com/slevinas"
              aria-label="GitHub Profile"
            >
              <Image src="/github.svg" alt="GitHub" width={24} height={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/sagilevinas"
              aria-label="LinkedIn Profile"
            >
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

      {/* Background & Skills */}
      <section className="mt-12">
        <h2 className="text-3xl font-medium text-accent-500 dark:text-accent-400">
          My Background and Skills
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          I am a Full-Stack Web Developer with a deep interest in modern
          technologies, specializing in{" "}
          <strong>
            Next.js, React, TailwindCSS, Supabase, PostgreSQL, and Firebase
          </strong>
          . I focus on building scalable and efficient web applications that
          deliver great user experiences.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mt-12">
        <h2 className="text-3xl font-medium text-accent-500 dark:text-accent-400">
          Tech Stack
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4 items-center">
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
      </section>

      {/* Resume Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-medium text-accent-500 dark:text-accent-400">
          Download My Resume
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Click below to get a copy of my latest resume.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/resume.pdf"
            download="Zigi_Resume.pdf"
            onClick={trackResumeDownload}
            className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold rounded-lg transition"
          >
            Download Resume
          </a>

          <button
            onClick={() => setShowResume((prev) => !prev)}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition"
          >
            {showResume ? "Hide Resume Preview" : "Show Resume Preview"}
          </button>
        </div>

        {showResume && (
          <div className="mt-8">
            <iframe
              src="/resume.pdf"
              className="w-full h-[600px] rounded-lg border border-gray-200 dark:border-gray-700"
              title="Resume Viewer"
            ></iframe>
          </div>
        )}
      </section>

      {/* Contact CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-medium text-accent-500 dark:text-accent-400">
          Let&apos;s Connect
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Interested in working together? Let&apos;s have a chat.
        </p>
        <Link href="/contact">
          <button className="mt-4 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold rounded-lg transition">
            Contact Me
          </button>
        </Link>
      </section>
    </section>
  );
}
