export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-black/[.08] px-6 py-4 dark:border-white/[.145]">
      <span className="text-lg font-semibold text-black dark:text-zinc-50">
        AITask
      </span>
      <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <a href="#" className="hover:text-black dark:hover:text-zinc-50">
          Home
        </a>
        <a href="#" className="hover:text-black dark:hover:text-zinc-50">
          About
        </a>
        <a href="#" className="hover:text-black dark:hover:text-zinc-50">
          Contact
        </a>
      </nav>
    </header>
  );
}
