import Navigation from "@/app/_components/Navigation";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <header className="border-b border-primary-900 dark:border-zinc-700 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Navigation />
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
