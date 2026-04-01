"use client";

import { motion } from "framer-motion";
import { Check, Share2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("Pricing");

  const plans = ["basic", "standard", "pro"] as const;

  const handleShare = async (planKey: (typeof plans)[number]) => {
    const baseUrl =
      typeof window !== "undefined" ? window.location.origin : "";

    // ✅ aniq kartaga boradigan link
    const url = `${baseUrl}/#pricing-${planKey}`;

    const title = `${t("title")} — ${t(`plans.${planKey}.title`)}`;
    const text = t("shareText") || "Narxlar va tariflar bilan tanishing";

    try {
      // ✅ Mobile’da: share oynasi chiqadi
      if (navigator.share) {
        await navigator.share({ title, text, url });
        return;
      }

      // ✅ Desktop’da: linkni copy qiladi
      await navigator.clipboard.writeText(url);
      alert("Link nusxa olindi ✅");
    } catch (err) {
      console.log(err);
      alert("Share ishlamadi 😅");
    }
  };

  return (
    <section
      id="pricing"
      className="
        bg-[#0b0b0d] text-white overflow-hidden
        py-24 lg:py-28
        scroll-mt-28
      "
    >
      {/* ✅ Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 2xl:px-0">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#4f9eff]"
        >
          {t("title")}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          {t("desc")}
        </motion.p>

        {/* ✅ Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 2xl:gap-12">
          {plans.map((key, i) => (
            <motion.div
              key={key}
              id={`pricing-${key}`} // ✅ link shu id’ga keladi
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.12 }}
              className="
                relative
                scroll-mt-32  /* ✅ navbar bosib qolmasligi uchun */
                bg-gradient-to-b from-[#111113] to-[#0b0b0d]
                border border-[#1d1d20]
                rounded-2xl p-8 xl:p-9 2xl:p-10
                shadow-lg
                hover:shadow-[0_0_25px_rgba(79,158,255,0.3)]
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* ✅ Share button */}
              <button
                onClick={() => handleShare(key)}
                className="
                  absolute top-4 right-4
                  p-2 rounded-xl
                  border border-[#1d1d20]
                  bg-[#0b0b0d]/60
                  hover:bg-[#1b1b1f]
                  transition
                "
                aria-label="Share plan"
                title="Share"
              >
                <Share2 size={18} className="text-gray-300" />
              </button>

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
                {t
                  .raw(`plans.${key}.features`)
                  .map((feature: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <Check size={16} className="text-[#4f9eff] mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
