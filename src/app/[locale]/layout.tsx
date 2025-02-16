'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';
import { PrimeReactProvider } from 'primereact/api';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useCurrentLocale(i18nConfig);

  return (
    <PrimeReactProvider>
      <html lang={locale}>
        <body className={inter.className}>{children}</body>
      </html>
    </PrimeReactProvider>
  );
}
