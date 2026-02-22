export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50
      w-12 h-6 rounded-full
      bg-gray-300 dark:bg-gray-700
      flex items-center px-1
      transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <span
        className={`w-4 h-4 rounded-full bg-white shadow-md
        transform transition-transform duration-300
        ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
}
    