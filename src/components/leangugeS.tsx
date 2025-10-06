'use client';
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const switchLanguage = (newLocale: string) => {
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  const languages = [
    { code: "uzk", name: t("uzbek"), flag: "/flags/uz.png" },
    { code: "uz", name: t("uzbekLatin"), flag: "/flags/uz.png" },
    { code: "ru", name: t("russian"), flag: "/flags/ru.png" },
    { code: "en", name: t("english"), flag: "/flags/en.png" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg 
          hover:bg-green-600 cursor-pointer transition-all duration-300 shadow-md active:scale-95"
      >
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.code}
          width={20}
          height={14}
          className="rounded-sm"
        />
        <span className="font-medium">{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-xl shadow-lg border border-gray-700 animate-fade-in">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`flex items-center gap-2 px-4 py-2 text-sm text-white cursor-pointer transition-all 
                hover:bg-green-600 rounded-lg ${
                  lang.code === locale ? "bg-green-700" : ""
                }`}
            >
              <Image src={lang.flag} alt={lang.code} width={20} height={14} className="rounded-sm" />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
