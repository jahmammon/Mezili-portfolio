import type { Config } from "tailwindcss";

const config: Config = {
  content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
              "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
                ],

                  theme: {
                      extend: {
                            colors: {
                                    background: "#080808",
                                            panel: "#0c0c0c",

                                                    "emerald-primary": "#10B981",
                                                            "emerald-soft": "rgba(16,185,129,0.1)",
                                                                  },

                                                                        fontFamily: {
                                                                                sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
                                                                                        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
                                                                                              },

                                                                                                    backgroundImage: {
                                                                                                            "grid-pattern":
                                                                                                                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
                                                                                                                            },

                                                                                                                                  animation: {
                                                                                                                                          scanline: "scanline 8s linear infinite",
                                                                                                                                                },

                                                                                                                                                      keyframes: {
                                                                                                                                                              scanline: {
                                                                                                                                                                        "0%": {
                                                                                                                                                                                    transform: "translateY(-100%)",
                                                                                                                                                                                              },
                                                                                                                                                                                                        "100%": {
                                                                                                                                                                                                                    transform: "translateY(100vh)",
                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                  },

                                                                                                                                                                                                                                                    plugins: [],
                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                    export default config;