import Link from "next/link";


export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700 mt-12 py-6 text-center text-sm text-gray-400">
      <p className="mb-1">© {new Date().getFullYear()} Sagi Levinas. All rights reserved.</p>
      <div className="flex justify-center gap-4 text-base mt-2">
        <Link
          href="https://github.com/slevinas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/slevinas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:slevinas@gmail.com"
          className="hover:text-white transition"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
