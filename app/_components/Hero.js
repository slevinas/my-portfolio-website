'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1450&q=80"
        alt="Top-down view of laptops and tech workspace"
        fill

        priority
        className="z-0 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Hero Content */}
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-md">
          Welcome to Zigi&apos;s Website.
        </h1>

        <Link
          href="/projects"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-200 shadow-md"
        >
          Explore My Projects
        </Link>
      </div>
    </div>
  );
}
