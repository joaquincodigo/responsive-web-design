export default function BurgerMenuButton({ onClick, isOpen }) {
  return (
    <button
      onMouseDown={onClick}
      className="relative w-9 h-9 border border-white/70 rounded-md flex items-center justify-center md:hidden"
      aria-label="Toggle menu"
    >
      <span
        className={`
          absolute w-5 h-0.5 bg-white rounded-full
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-y-0 rotate-45" : "-translate-y-2"}
        `}
      />
      <span
        className={`
          absolute w-5 h-0.5 bg-white rounded-full
          transition-opacity duration-200 ease-in-out
          ${isOpen ? "opacity-0" : "opacity-100"}
        `}
      />
      <span
        className={`
          absolute w-5 h-0.5 bg-white rounded-full
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-y-0 -rotate-45" : "translate-y-2"}
        `}
      />
    </button>
  );
}