// import { auth } from "@/app/_lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Navigation() {
  // const sessionFromNextAuth = await auth();

  return (
    <nav className="z-10 text-xl w-full">
      <ul className="flex justify-center gap-8 items-center">
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="flex items-center gap-3 sm:gap-4 z-10 hover:opacity-90 transition-all"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-yellow-400">
              <Image
                src="/avatar.png"
                alt="Zigi's avatar"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-base sm:text-lg font-semibold text-primary-100">
              My Info
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="hover:text-accent-400 transition-colors"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="hover:text-accent-400 transition-colors"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
