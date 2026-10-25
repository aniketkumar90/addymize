import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://trackolab.com'),
  title: {
    default: "Trackolab | Intelligent CRM & HRMS Platform for Modern Businesses",
    template: "%s | Trackolab",
  },
  description:
    "Trackolab provides powerful CRM & HRMS solutions for modern businesses — manage leads, pipelines, employees, payroll, and attendance in one unified platform.",
  keywords: [
    "Trackolab",
    "CRM System",
    "HRMS Platform",
    "Payroll Management",
    "Lead Management",
    "Attendance Tracking",
    "Enterprise CRM",
    "Workforce Management",
  ],
  authors: [{ name: "Trackolab", url: "https://trackolab.com" }],
  creator: "Trackolab",
  publisher: "Trackolab",
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
    title: "Trackolab | Intelligent CRM & HRMS Platform",
    description:
      "All-in-one CRM & HRMS platform to streamline leads, sales pipelines, payroll, and employee management.",
    url: "https://trackolab.com",
    siteName: "Trackolab",
    images: [
      {
        url: "/images/trackolab-logo.png",
        width: 1200,
        height: 630,
        alt: "Trackolab CRM & HRMS Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trackolab | Intelligent CRM & HRMS Platform",
    description:
      "All-in-one CRM & HRMS platform to streamline leads, sales pipelines, payroll, and employee management.",
    images: ["/images/trackolab-logo.png"],
    creator: "@trackolab",
  },
  icons: {
    icon: "/images/trackolab-logo.png",
    shortcut: "/images/trackolab-logo.png",
    apple: "/images/trackolab-logo.png",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://trackolab.com/#organization",
      name: "Trackolab",
      url: "https://trackolab.com",
      logo: "https://trackolab.com/images/trackolab-logo.png",
      description:
        "Intelligent CRM and HRMS solutions for modern businesses.",
      sameAs: [
        "https://twitter.com",
        "https://linkedin.com",
        "https://github.com",
        "https://instagram.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://trackolab.com/#website",
      url: "https://trackolab.com",
      name: "Trackolab",
      publisher: {
        "@id": "https://trackolab.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      name: "Trackolab CRM & HRMS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web-based",
      description:
        "Intelligent CRM & HRMS Platform for modern enterprises.",
      offers: {
        "@type": "Offer",
        price: "99",
        priceCurrency: "INR",
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
