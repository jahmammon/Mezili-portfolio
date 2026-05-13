"use client";

import { useState, useEffect } from "react";
import { LazyMotion, domMax, m, AnimatePresence } from "framer-motion";
import CommandPalette from "@/components/ui/CommandPalette";

/**
 * High-performance client shell for Next.js 14 App Router.
  * Implements hydration-safe rendering and operational UI overlays.
   */
   export default function ClientShell({
     children,
     }: {
       children: React.ReactNode;
       }) {
         const [mounted, setMounted] = useState(false);
           const [loading, setLoading] = useState(true);

             useEffect(() => {
                 setMounted(true);

                     const timer = setTimeout(() => {
                           setLoading(false);
                               }, 800);

                                   return () => clearTimeout(timer);
                                     }, []);

                                       /**
                                          * Prevent hydration mismatch between server/client.
                                             */
                                               if (!mounted) {
                                                   return <div className="bg-background min-h-screen" aria-hidden="true" />;
                                                     }

                                                       return (
                                                           <LazyMotion features={domMax}>
                                                                 <AnimatePresence mode="wait">
                                                                         {loading ? (
                                                                                   <m.div
                                                                                               key="loader"
                                                                                                           initial={{ opacity: 1 }}
                                                                                                                       exit={{ opacity: 0 }}
                                                                                                                                   className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
                                                                                                                                             >
                                                                                                                                                         <div className="w-32 h-px bg-white/10 relative overflow-hidden">
                                                                                                                                                                       <m.div
                                                                                                                                                                                       initial={{ x: "-100%" }}
                                                                                                                                                                                                       animate={{ x: "100%" }}
                                                                                                                                                                                                                       transition={{
                                                                                                                                                                                                                                         duration: 0.8,
                                                                                                                                                                                                                                                           ease: "circOut",
                                                                                                                                                                                                                                                                             repeat: Infinity,
                                                                                                                                                                                                                                                                                             }}
                                                                                                                                                                                                                                                                                                             className="absolute inset-0 bg-emerald-primary"
                                                                                                                                                                                                                                                                                                                           />
                                                                                                                                                                                                                                                                                                                                       </div>
                                                                                                                                                                                                                                                                                                                                                 </m.div>
                                                                                                                                                                                                                                                                                                                                                         ) : (
                                                                                                                                                                                                                                                                                                                                                                   <m.div
                                                                                                                                                                                                                                                                                                                                                                               key="main"
                                                                                                                                                                                                                                                                                                                                                                                           initial={{ opacity: 0 }}
                                                                                                                                                                                                                                                                                                                                                                                                       animate={{ opacity: 1 }}
                                                                                                                                                                                                                                                                                                                                                                                                                   transition={{ duration: 0.5 }}
                                                                                                                                                                                                                                                                                                                                                                                                                             >
                                                                                                                                                                                                                                                                                                                                                                                                                                         {/* Global overlays */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                     <div className="noise-overlay" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

                                                                                                                                                                                                                                                                                                                                                                                                                                                                             {/* Command interface */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <CommandPalette />

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     {/* Page content */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <div className="relative z-10">{children}</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           </m.div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </AnimatePresence>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             </LazyMotion>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               }