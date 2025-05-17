"use client";

import { useState, useEffect } from "react";
import supabase from "@/lib/supabase";
import { WaitlistFormData, Language } from "@/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { translations } from "@/translations";

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    route: "",
    company_name: "",
    is_incorporated: false,
  });

  const [language, setLanguage] = useState<Language>("en");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = translations[language].form;

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const supabaseClient = supabase as SupabaseClient;

      const { error } = await supabaseClient.from("waitlist").insert([
        {
          name: formData.name,
          email: formData.email,
          route: formData.route,
          company_name: formData.company_name || null,
          is_incorporated: formData.is_incorporated,
        },
      ]);

      if (error) throw error;

      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        route: "",
        company_name: "",
        is_incorporated: false,
      });
    } catch (err) {
      setError(t.error);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mx-auto">
      {submitted ? (
        <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-700/20 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/30 shadow-glow-green animate-float">
          <div className="flex items-center space-x-2 text-emerald-300 mb-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-xl font-bold">{t.success.title}</span>
          </div>
          <p className="text-emerald-100 mb-3">
            {t.success.message1}{" "}
            <span className="font-semibold text-white">{formData.email}</span>{" "}
            {t.success.message2}
          </p>
          <p className="text-emerald-200 mb-6">
            We'll let you know when Kananko is ready.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-3 px-4 bg-emerald-800/80 hover:bg-emerald-700/80 text-white rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            {t.success.anotherResponse}
          </button>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-blue-500/20 shadow-glow-lg w-full">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t.title}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-400 transition-colors">
                <FaUser className="w-5 h-5" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t.namePlaceholder}
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 bg-gray-900/80 text-white border border-gray-700 group-hover:border-blue-500/50 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-400 transition-colors">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.emailPlaceholder}
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 bg-gray-900/80 text-white border border-gray-700 group-hover:border-blue-500/50 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-400 transition-colors">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <input
                type="text"
                id="route"
                name="route"
                placeholder={t.routePlaceholder}
                required
                value={formData.route}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 bg-gray-900/80 text-white border border-gray-700 group-hover:border-blue-500/50 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-400 transition-colors">
                <FaBuilding className="w-5 h-5" />
              </div>
              <input
                type="text"
                id="company_name"
                name="company_name"
                placeholder={t.companyPlaceholder}
                value={formData.company_name}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 bg-gray-900/80 text-white border border-gray-700 group-hover:border-blue-500/50 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex items-center py-2">
              <label
                htmlFor="is_incorporated"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="is_incorporated"
                    name="is_incorporated"
                    checked={formData.is_incorporated}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`block w-12 h-6 rounded-full transition-all duration-300 ${
                      formData.is_incorporated
                        ? "bg-gradient-to-r from-blue-500 to-purple-500"
                        : "bg-gray-700"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 transform ${
                      formData.is_incorporated ? "translate-x-6" : ""
                    }`}
                  ></div>
                </div>
                <div className="ml-3 text-sm text-gray-300">
                  {t.incorporatedQuestion}
                </div>
              </label>
            </div>

            {error && (
              <div className="text-red-400 text-sm bg-red-900/30 p-3 rounded-lg border border-red-800">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  {error}
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 shadow-glow-blue hover:shadow-glow-purple"
            >
              <span className="font-medium">
                {isSubmitting ? t.submitting : t.submitButton}
              </span>
              {!isSubmitting && (
                <svg
                  className="w-5 h-5 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
