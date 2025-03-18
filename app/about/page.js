import { getCabins } from "@/app/_lib/data-service";
import Image from "next/image";
import Link from "next/link";
import React from "react";



// Refetching data every 24 hours.
const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  if (!cabins.length) {
    throw new Error("Cabins could not be loaded");
  }

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          About Me (Zigi )
        </h1>

        <div className="space-y-8">
          <p>
            I am a Full-Stack Web Developer with a passion for building scalable
            applications using Next.js, Supabase, PostgreSQL, and modern
            frontend technologies.
          </p>
        </div>
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/zigi_s_wild_oasisi_website_screenshot.png"
          fill
          // placeholder="blur"
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
