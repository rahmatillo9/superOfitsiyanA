'use client';
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../leangugeS";
import { useTranslations } from "next-intl";

export default function NavbarB() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSmoothScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // Navbar balandligi (tepada to‘sib qolmasligi uchun)
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setIsMenuOpen(false); // mobil menyuni yopamiz
    }
  };

  return (
    <Navbar
    shouldHideOnScroll
      isBordered
      maxWidth="xl"
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 md:px-8 shadow-md"
    >
      {/* Brand */}
      <NavbarBrand className="flex items-center gap-2 cursor-pointer" onClick={() => handleSmoothScroll("#home")}>
        <img src="/favicon.ico" alt="SO" className="h-6 w-6" />
        <p className="font-bold text-lg text-green-400">Super Ofitsiyant</p>
      </NavbarBrand>

      {/* Desktop menu */}
      <NavbarContent className="hidden md:flex gap-8" justify="center">
        <NavbarItem>
          <button
            onClick={() => handleSmoothScroll("#home")}
            className="text-gray-300 hover:text-green-400 transition-all"
          >
            {t("basis")}
          </button>
        </NavbarItem>
        <NavbarItem>
          <button
            onClick={() => handleSmoothScroll("#pricing")}
            className="text-gray-300 hover:text-green-400 transition-all"
          >
            {t("prices")}
          </button>
        </NavbarItem>
        <NavbarItem>
          <button
            onClick={() => handleSmoothScroll("#about")}
            className="text-gray-300 hover:text-green-400 transition-all"
          >
            {t("about")}
          </button>
        </NavbarItem>
           <NavbarItem>
          <button
            onClick={() => handleSmoothScroll("#contact")}
            className="text-gray-300 hover:text-green-400 transition-all"
          >
            {t("contact")}
          </button>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop language switch */}
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile burger icon */}
      <div className="md:hidden flex items-center gap-2">
        <LanguageSwitcher />
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none transition-transform hover:scale-110"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 border-t border-gray-700 flex flex-col items-start px-6 py-4 space-y-3 md:hidden animate-fade-in">
          <button
            onClick={() => handleSmoothScroll("#home")}
            className="text-gray-300 hover:text-green-400 text-lg transition-all w-full text-left"
          >
            {t("basis")}
          </button>
          <button
            onClick={() => handleSmoothScroll("#pricing")}
            className="text-gray-300 hover:text-green-400 text-lg transition-all w-full text-left"
          >
            {t("prices")}
          </button>
          <button
            onClick={() => handleSmoothScroll("#about")}
            className="text-gray-300 hover:text-green-400 text-lg transition-all w-full text-left"
          >
            {t("about")}
          </button>
        </div>
      )}
    </Navbar>
  );
}
