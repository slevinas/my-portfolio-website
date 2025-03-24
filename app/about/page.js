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
    <section className="max-w-5xl mx-auto p-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          src="/avatar.png"
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full border-4 border-accent-400 shadow-md"
        />
        <div>
          <h1 className="text-4xl font-semibold text-accent-400">Zigi</h1>
          <h2 className="text-lg text-gray-400">
            Mechanical Engineer, Full-Stack Web Developer
          </h2>
          <p className="text-gray-300 mt-2">
            Passionate about building scalable applications with{" "}
            <strong>Next.js, Supabase, PostgreSQL</strong>, and modern frontend
            technologies.
          </p>

          {/* Social Links */}
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

      {/* Background & Skills */}
      <div className="mt-10">
        <h2 className="text-3xl text-accent-400 font-medium">
          My Background and Skills
        </h2>
        <p className="text-gray-300 mt-4">
          I am a Full-Stack Web Developer with a deep interest in modern
          technologies, specializing in{" "}
          <strong>
            Next.js, React, TailwindCSS, Supabase, PostgreSQL, and Firebase
          </strong>
          . I focus on building scalable and efficient web applications that
          deliver great user experiences.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mt-10">
        <h2 className="text-3xl text-accent-400 font-medium">Tech Stack</h2>
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
          <div className="bg-white p-2 rounded-lg">
            <Image src="/amazon-aws-24.png" alt="AWS" width={40} height={40} />
          </div>
          <Image src="/snowflake2.svg" alt="Snowflake" width={80} height={80} />
        </div>
      </div>

      {/* Resume Section */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl text-accent-400 font-medium">
          Download My Resume
        </h2>
        <p className="text-gray-300 mt-2">
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

        {/* Toggle Resume Viewer */}
        <button
          onClick={() => setShowResume((prev) => !prev)}
          className="mt-4 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          {showResume ? "Hide Resume Preview" : "Show Resume Preview"}
        </button>

        {/* Resume Viewer */}
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
      <div className="mt-10 text-center">
        <h2 className="text-3xl text-accent-400 font-medium">Let&#39s Connect</h2>
        <p className="text-gray-300 mt-4">
          Interested in working together? Let&#39s have a chat.
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
