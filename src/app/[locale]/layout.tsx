import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import '@/styles/globals.css';
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from 'next-intl';
import NavbarB from "@/components/navbar/navbar";
import Footer from "@/components/footer";





export const metadata: Metadata = {
  title: "Super Ofitsiyant",
  description: "",
   icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Locale tekshiruvi
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'uz' | 'uzK' | 'ru' | 'en')) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
  <body className="flex flex-col min-h-screen justify-between relative z-0">

        <NextIntlClientProvider locale={locale}>
          <main className="flex-1 flex flex-col">
              
        <NavbarB/>
            {children}
         <Footer/>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}