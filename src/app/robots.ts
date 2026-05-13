import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
      rules: {
            userAgent: "*",
                  allow: "/",
                        disallow: [
                                "/private/",
                                        "/api/",
                                                "/*.json$",
                                                      ],
                                                          },

                                                              sitemap:
                                                                    "https://aminemezili.com/sitemap.xml",
                                                                      };
                                                                      }