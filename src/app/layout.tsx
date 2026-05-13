import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import ClientShell from "@/components/ClientShell";

const inter = Inter({
  subsets: ["latin"],
    variable: "--font-inter",
      display: "swap",
      });

      const mono = JetBrains_Mono({
        subsets: ["latin"],
          variable: "--font-mono",
            display: "swap",
            });

            export const metadata: Metadata = {
              metadataBase: new URL("https://aminemezili.com"),

                title: {
                    default: "Mezili Amine | Operational Systems & Technical Coordination",
                        template: "%s | Mezili Amine",
                          },

                            description:
                                "Trilingual professional bridging industrial maintenance, IT infrastructure, and international field operations.",

                                  openGraph: {
                                      title: "Mezili Amine | Professional Portfolio",

                                          description:
                                                "Industrial Maintenance, IT Systems, and International Operations Specialist.",

                                                    url: "https://aminemezili.com",

                                                        siteName: "Mezili Amine Portfolio",

                                                            images: [
                                                                  {
                                                                          url: "/assets/1000020126.png",
                                                                                  width: 1200,
                                                                                          height: 630,
                                                                                                  alt: "Mezili Amine Portfolio",
                                                                                                        },
                                                                                                            ],

                                                                                                                locale: "en_US",
                                                                                                                    type: "website",
                                                                                                                      },

                                                                                                                        twitter: {
                                                                                                                            card: "summary_large_image",
                                                                                                                                title: "Mezili Amine Portfolio",
                                                                                                                                    description:
                                                                                                                                          "Industrial Maintenance, IT Systems, and International Operations Specialist.",
                                                                                                                                              images: ["/assets/1000020126.png"],
                                                                                                                                                },

                                                                                                                                                  robots: {
                                                                                                                                                      index: true,
                                                                                                                                                          follow: true,
                                                                                                                                                            },
                                                                                                                                                            };

                                                                                                                                                            export default function RootLayout({
                                                                                                                                                              children,
                                                                                                                                                              }: {
                                                                                                                                                                children: React.ReactNode;
                                                                                                                                                                }) {
                                                                                                                                                                  return (
                                                                                                                                                                      <html
                                                                                                                                                                            lang="en"
                                                                                                                                                                                  suppressHydrationWarning
                                                                                                                                                                                        className={`${inter.variable} ${mono.variable} scroll-smooth`}
                                                                                                                                                                                            >
                                                                                                                                                                                                  <body className="bg-background text-white antialiased selection:bg-emerald-primary/30 selection:text-emerald-primary">
                                                                                                                                                                                                          <ClientShell>{children}</ClientShell>
                                                                                                                                                                                                                </body>
                                                                                                                                                                                                                    </html>
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                      }