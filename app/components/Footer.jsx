export default function Footer() {
  const year = new Date().getFullYear(); // server-rendered

  return (
    <footer className="text-xs mt-12 md:mt-6 border-t border-gray-200 h-12 flex items-center justify-center flex-col">
      <p className="text-gray-600">
        © {year} Northbridge Consulting Group LLC.
      </p>
      <p className="text-gray-600">All rights reserved.</p>
    </footer>
  );
}
