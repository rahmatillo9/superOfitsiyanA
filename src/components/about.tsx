"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function About() {
  const t = useTranslations("About");
  const [isClient, setIsClient] = useState(false);

  // faqat client tomonda mediaQuery ni ishlatamiz
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const sections = [
    {
      imageDesktop: "/about/2025-10-06_20-36-53.png",
      imageMobile: "/about/mobile1.png",
      title: t("sections.0.title"),
      desc: t("sections.0.desc"),
    },
    {
      imageDesktop: "/about/default2.png",
      imageMobile: "/about/mobile2.png",
      title: t("sections.1.title"),
      desc: t("sections.1.desc"),
    },
    {
      imageDesktop: "/about/default1.png",
      imageMobile: "/about/mobile3.png",
      title: t("sections.2.title"),
      desc: t("sections.2.desc"),
    },
    {
      imageDesktop: "/about/2025-10-06_20-45-14.png",
      imageMobile: "/about/mobile4.png",
      title: t("sections.3.title"),
      desc: t("sections.3.desc"),
    },
  ];

  return (
    <section className="bg-[#0b0b0d] text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <Fade triggerOnce direction="up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            {t("title")}
          </h2>
          <h4 className="text-center text-green-500 mb-16 max-w-3xl mx-auto text-lg md:text-xl">
            {t("intro")}
          </h4>
        </Fade>

        <div className="flex flex-col gap-24">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-between items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <Fade direction={index % 2 === 0 ? "left" : "right"} triggerOnce>
                <div className="w-auto flex justify-center">
                  <div className="w-[280px] sm:w-[340px] md:w-[450px] lg:w-[550px] xl:w-[600px]">
                    {isClient && (
                      <Image
                        src={
                          isMobile
                            ? section.imageMobile
                            : section.imageDesktop
                        }
                        alt={section.title}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-3xl shadow-[0_0_30px_rgba(79,158,255,0.2)] border border-[#1c1c22] object-cover"
                      />
                    )}
                  </div>
                </div>
              </Fade>

              <Fade direction={index % 2 === 0 ? "right" : "left"} triggerOnce>
                <div className="md:w-auto space-y-4 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#4f9eff]">
                    {section.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {section.desc}
                  </p>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
