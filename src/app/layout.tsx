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
  metadataBase: new URL("https://www.nivoraib.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nivoraib.com",
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

const organizationLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://www.nivoraib.com",
  logo: "https://www.nivoraib.com/logo/1788871377642.jpg",
  name: "NivoraIB",
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
                if (saved === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLD) }}
        />
      </head>
      <body className="flex flex-col min-h-full bg-[#EBF6F7] dark:bg-zinc-950 text-navy-900 dark:text-zinc-100 selection:bg-brand-soft/40 selection:text-navy-950 font-sans">
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
