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
          <Link href="/about/me" className="flex items-center gap-4 z-10">
            <Image
              src="/avatar.png"
              quality={100}
              height="60"
              width="60"
              alt="The Wild Oasis logo"
            />
            <span className="text-xl font-semibold text-primary-100">
              My Info
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
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
