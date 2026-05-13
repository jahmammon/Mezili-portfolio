/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
    experimental: {
        optimizePackageImports: ["lucide-react"],
          },
          
            images: {
                formats: ["image/avif", "image/webp"],
                    remotePatterns: [],
                      },
                      };
                      
                      export default nextConfig; */