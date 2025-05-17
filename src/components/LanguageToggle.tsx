"use client";

import { useState, useEffect } from "react";
import { Language } from "@/types";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("en");

  // Set or get the language from localStorage when component mounts
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language;
    if (
      storedLanguage &&
      (storedLanguage === "en" || storedLanguage === "fr")
    ) {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    // Dispatch custom event so other components can listen for language changes
    window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }));
  };

  return (
    <div className="inline-flex rounded-md overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-md text-sm font-medium">
      <button
        onClick={() => toggleLanguage("en")}
        className={`px-3 py-1.5 transition-all duration-200 ${
          language === "en"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <div className="w-px h-full bg-gray-700"></div>
      <button
        onClick={() => toggleLanguage("fr")}
        className={`px-3 py-1.5 transition-all duration-200 ${
          language === "fr"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
        aria-label="Passer au français"
      >
        FR
      </button>
    </div>
  );
}
