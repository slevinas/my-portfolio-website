"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [showResume, setShowResume] = useState(false);
  const [copied, setCopied] = useState(false);

  function trackResumeDownload() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "resume_download", {
        event_category: "engagement",
        event_label: "Resume Download",
      });
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("slevinas@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      className="max-w-5xl mx-auto p-8 text-gray-900 dark:text-gray-100"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* Profile Header */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-6"
        variants={fadeUp}
        custom={0}
      >
        <Image
          src="/avatar.png"
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full border-4 border-accent-400 shadow-md"
        />
        <div>
          <h1 className="text-4xl font-semibold text-accent-400">Zigi</h1>
          <h2 className="text-lg text-gray-800 dark:text-gray-300">
            Mechanical Engineer - Full-Stack Developer
          </h2>
          <p className="text-gray-800 dark:text-gray-300 mt-2">
            Passionate about building fast, scalable apps with{" "}
            <strong>Next.js, Supabase, and PostgreSQL</strong>. I focus on clean
            code, good architecture, and smooth user experiences.
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
      </motion.div>

      {/* Background & Skills */}
      <motion.div className="mt-10" variants={fadeUp} custom={1}>
        <h2 className="text-3xl text-accent-400 font-medium">
          Background & Skills
        </h2>
        <ul className="text-gray-800 dark:text-gray-300 mt-4 space-y-2 list-disc list-inside">
          <li>
            I pivoted from mechanical engineering to web development with a
            focus on:
          </li>
          <li>Modern full-stack apps with React, Next.js & Tailwind CSS</li>
          <li>Backends powered by Supabase & PostgreSQL</li>
          <li>ETL tooling & Python scripting for QA & automation</li>
        </ul>
      </motion.div>

      {/* Tech Stack */}
      <motion.div className="mt-10" variants={fadeUp} custom={2}>
        <h2 className="text-3xl text-accent-400 font-medium">Tech Stack</h2>
        <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4">
          {[
            "/nextjs.svg",
            "/react.svg",
            "/tailwind.svg",
            "/node-js.svg",
            "/icons8-postgresql-24.png",
            "/amazon-aws-24.png",
            "/snowflake2.svg",
          ].map((src, i) => (
            <motion.div key={src} custom={i} variants={fadeUp}>
              <Image
                src={src}
                alt={src.split("/").pop()}
                width={40}
                height={40}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Resume Section */}
      <motion.div className="mt-10 text-center" variants={fadeUp} custom={3}>
        <h2 className="text-3xl text-accent-400 font-medium">
          Download My Resume
        </h2>
        <p className="text-gray-800 dark:text-gray-300 mt-2">
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
          className="mt-4 px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 transition"
        >
          {showResume ? "Hide Resume Preview" : "Show Resume Preview"}
        </button>
        {showResume && (
          <motion.div
            className="mt-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
          >
            <iframe
              src="/resume.pdf"
              className="w-full h-[600px] border rounded-lg"
              title="Resume Viewer"
            ></iframe>
          </motion.div>
        )}
      </motion.div>

      {/* Contact CTA */}
      <motion.div className="mt-10 text-center" variants={fadeUp} custom={5}>
        <h2 className="text-3xl text-accent-400 font-medium">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-800 dark:text-gray-300 mt-4">
          Interested in working together? Let&apos;s have a chat.
        </p>
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={handleCopyEmail}
            className="px-6 py-3 bg-accent-500 text-primary-800 font-semibold rounded-lg hover:bg-accent-600 transition"
          >
            {copied ? "Email Copied!" : "Copy Email Address"}
          </button>
          <Link href="/contact">
            <button className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700 transition">
              Contact Me
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
