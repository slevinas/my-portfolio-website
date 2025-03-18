import { auth } from "@/app/_lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Navigation() {
  const sessionFromNextAuth = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
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
