import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ComingSoonProvider } from "@/components/ComingSoonModal";
import { ThemeProvider } from "@/components/ThemeProvider";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Nivoraib — AI Workspace for IB Teachers",
    template: "%s | Nivoraib",
  },
  description:
    "NivoraIB is an AI-powered workspace that helps IB educators plan, teach, assess, and manage their teaching workflows in one place.",
  keywords: [
    "IB Diploma Programme",
    "AI Teacher Workspace",
    "IB Unit Planner",
    "IB Lesson Planner",
    "Assessment Generator",
    "Internal Assessment Guide",
    "TOK Guide",
    "Curriculum Grounded AI",
    "Educational Reliability",
  ],
  authors: [{ name: "NivoraIB" }],
  creator: "NivoraIB",
  metadataBase: new URL("https://nivoraib.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nivoraib.com",
    title: "Nivoraib — AI Workspace for IB Teachers",
    description:
      "Plan, create, assess, and teach from one curriculum-grounded workspace built around how IB teachers actually work.",
    siteName: "Nivoraib",
    images: [
      {
        url: "/logo/1788871377642.jpg",
        width: 200,
        height: 200,
        alt: "Nivoraib - AI Workspace for IB Teachers",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Nivoraib — AI Workspace for IB Teachers",
    description:
      "Plan, create, assess, and teach from one curriculum-grounded workspace built around how IB teachers actually work.",
    images: ["/logo/1788871377642.jpg"],
  },
  icons: {
    icon: "/logo/1788871377642.jpg",
    apple: "/logo/1788871377642.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${sora.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('nivoraib-theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-full bg-white dark:bg-navy-950 text-navy-900 dark:text-slate-100 selection:bg-brand-soft/40 selection:text-navy-950 font-sans">
        <ThemeProvider>
          <ComingSoonProvider>
            <Navbar />
            <main className="flex-grow pt-[84px] sm:pt-[92px]">{children}</main>
            <Footer />
          </ComingSoonProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
