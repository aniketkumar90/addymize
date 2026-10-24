import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://addymize.com'),
  title: {
    default: "Addymize | Revolutionize Your Digital Presence — Modern SaaS & Web Solutions",
    template: "%s | Addymize",
  },
  description:
    "End-to-End Web Solutions for Modern Businesses — From Modular Web Development and Intelligent CRM Dashboards to Digital Identity & Cloud Telemetry.",
  keywords: [
    "Addymize",
    "Modular Web Development",
    "Intelligent CRM Dashboards",
    "Digital Identity",
    "Cloud Telemetry",
    "SaaS Platform",
    "Next.js Web Solutions",
    "Composable Architecture",
    "Enterprise CRM",
    "High-Performance Web Apps",
  ],
  authors: [{ name: "Addymize Solutions", url: "https://addymize.com" }],
  creator: "Addymize Solutions",
  publisher: "Addymize Solutions",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Addymize | Revolutionize Your Digital Presence",
    description:
      "End-to-End Web Solutions for Modern Businesses — From Modular Web Development to Intelligent CRM Dashboards & Cloud Identity.",
    url: "https://addymize.com",
    siteName: "Addymize",
    images: [
      {
        url: "/images/dashboard-feature.png",
        width: 1200,
        height: 630,
        alt: "Addymize SaaS & CRM Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Addymize | Revolutionize Your Digital Presence",
    description:
      "Next-gen web development, intelligent CRM dashboards, and digital identity platforms.",
    images: ["/images/dashboard-feature.png"],
    creator: "@addymize",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://addymize.com/#organization",
      name: "Addymize Solutions",
      url: "https://addymize.com",
      logo: "https://addymize.com/images/logo.png",
      description:
        "End-to-End Web Solutions for Modern Businesses — From Modular Development and Intelligent CRM Dashboards to Digital Identity & Cloud Telemetry.",
      sameAs: [
        "https://twitter.com",
        "https://linkedin.com",
        "https://github.com",
        "https://instagram.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://addymize.com/#website",
      url: "https://addymize.com",
      name: "Addymize",
      publisher: {
        "@id": "https://addymize.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      name: "Addymize Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web-based",
      description:
        "Modular Web Architecture, Intelligent CRM Dashboards, and Digital Identity Systems for modern enterprises.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#073e4a] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
