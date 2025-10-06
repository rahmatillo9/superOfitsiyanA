"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("Pricing");

  const plans = ["basic", "standard", "pro"];

  return (
    <section className="bg-[#0b0b0d] text-white py-20 px-6 md:px-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-6 text-[#4f9eff]"
      >
        {t("title")}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
      >
        {t("desc")}
      </motion.p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-gradient-to-b from-[#111113] to-[#0b0b0d] border border-[#1d1d20] rounded-2xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(79,158,255,0.3)] hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[#4f9eff] mb-2">
              {t(`plans.${key}.title`)}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t(`plans.${key}.desc`)}
            </p>
            <p className="text-xl font-semibold text-green-400 mb-6">
              {t(`plans.${key}.price`)}
            </p>

            <ul className="space-y-2">
              {t.raw(`plans.${key}.features`).map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300">
                  <Check size={16} className="text-[#4f9eff] mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
