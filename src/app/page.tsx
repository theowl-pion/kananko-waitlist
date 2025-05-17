"use client";

import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import Image from "next/image";
import {
  FaMoneyBillWave,
  FaRegCalendarCheck,
  FaUserCheck,
  FaBoxOpen,
  FaGlobeAfrica,
  FaShippingFast,
} from "react-icons/fa";
import LanguageToggle from "@/components/LanguageToggle";
import { translations } from "@/translations";
import { Language } from "@/types";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLanguage(e.detail);
    };

    // Get initial language from localStorage if available
    const storedLanguage = localStorage.getItem("language") as Language;
    if (
      storedLanguage &&
      (storedLanguage === "en" || storedLanguage === "fr")
    ) {
      setLanguage(storedLanguage);
    }

    window.addEventListener(
      "languageChange",
      handleLanguageChange as EventListener
    );
    return () => {
      window.removeEventListener(
        "languageChange",
        handleLanguageChange as EventListener
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Background gradient blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-60 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Language toggle */}
        <div className="flex justify-center mb-12">
          <LanguageToggle />
        </div>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t.waitlistTitle}
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {t.networkTitle}
            </span>
          </h1>
          <p className="text-xl text-blue-300/80 max-w-2xl mx-auto mt-6">
            {t.tagline}
          </p>
        </header>

        {/* Hero Section - Image and Form side by side */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
          <div className="md:w-1/2 flex justify-center items-center w-full">
            <div className="relative w-full max-w-md shadow-glow-lg rounded-2xl overflow-hidden">
              <Image
                src="/kananko.png"
                alt="Kananko - Luggage Delivery Network"
                width={500}
                height={600}
                className="rounded-2xl hover:scale-105 transition-transform duration-700 object-contain mx-auto"
                priority
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <WaitlistForm />
          </div>
        </div>

        {/* Benefits Section - Cards in a grid at the bottom */}
        <section className="my-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t.whyJoin}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-700/20 backdrop-blur-sm p-6 rounded-xl border border-blue-700/30 shadow-glow-blue transform hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="mr-4 bg-blue-500/30 p-3 rounded-lg text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/50 transition-all">
                  <FaMoneyBillWave className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-blue-300">
                    {t.benefits.earnMoney.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {t.benefits.earnMoney.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 backdrop-blur-sm p-6 rounded-xl border border-purple-700/30 shadow-glow-purple transform hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="mr-4 bg-purple-500/30 p-3 rounded-lg text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/50 transition-all">
                  <FaRegCalendarCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-purple-300">
                    {t.benefits.control.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {t.benefits.control.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-700/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-700/30 shadow-glow-green transform hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="mr-4 bg-emerald-500/30 p-3 rounded-lg text-emerald-400 group-hover:text-emerald-300 group-hover:bg-emerald-500/50 transition-all">
                  <FaUserCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-emerald-300">
                    {t.benefits.verified.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {t.benefits.verified.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-pink-700/20 backdrop-blur-sm p-6 rounded-xl border border-pink-700/30 shadow-glow-pink transform hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="mr-4 bg-pink-500/30 p-3 rounded-lg text-pink-400 group-hover:text-pink-300 group-hover:bg-pink-500/50 transition-all">
                  <FaBoxOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-pink-300">
                    {t.benefits.flexible.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {t.benefits.flexible.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/40 to-amber-700/20 backdrop-blur-sm p-6 rounded-xl border border-amber-700/30 shadow-glow-amber transform hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="mr-4 bg-amber-500/30 p-3 rounded-lg text-amber-400 group-hover:text-amber-300 group-hover:bg-amber-500/50 transition-all">
                  <FaGlobeAfrica className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-amber-300">
                    {t.benefits.global.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {t.benefits.global.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-700/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-700/30 shadow-glow-cyan transform hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="mr-4 bg-cyan-500/30 p-3 rounded-lg text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-500/50 transition-all">
                  <FaShippingFast className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-cyan-300">
                    {t.benefits.fast.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {t.benefits.fast.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
