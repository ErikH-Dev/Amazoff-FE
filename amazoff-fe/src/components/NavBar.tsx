import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { text: "Home", route: "/" },
    { text: "Products", route: "/products" },
    { text: "Manage", route: "/manage" },
    { text: "About", route: "/about" },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                src="/amazoff-monochrome.png"
                alt="Amazoff Logo"
                width={40}
                height={40}
                className="align-middle"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block text-slate-50">
              {navItems.map((item, index) => (
                <Link key={index} href={item.route}>
                  <Button variant="ghost" className="cursor-pointer">
                    {item.text}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navItems.map((item, index) => (
              <Link key={index} href={item.route}>
                <Button
                  variant="ghost"
                  className="w-full text-left text-slate-50 cursor-pointer"
                >
                  {item.text}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}