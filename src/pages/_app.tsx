import Cursor from "@/components/layouts/Cursor";
import { DarkModeToggle } from "@/components/layouts/DarkModeToggle";
import Header from "@/components/layouts/Header";
import Transition from "@/components/layouts/PageTransitions/GsapTransitions";
import Inner from "@/components/layouts/PageTransitions/ScaleOutPT";
import { ThemeProvider } from "@/components/layouts/ThemeProvider";
import { TransitionProvider } from "@/context/TransitionContext";
import { Fonts } from "@/lib/fonts";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRef } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  const stickyElementRef = useRef(null);
  return (
    <TransitionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className={`content-grid-restricted ${Fonts.inter}`}>
          {/* <Header ref={stickyElementRef} /> */}
          {/* <Cursor stickyElement={stickyElementRef} /> */}

          {/* Framer Motion */}
          <AnimatePresence mode="wait">
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>

          {/* GSAP Transitions */}
          {/* <Transition>
            <Component key={router.route} {...pageProps} />
          </Transition> */}
        </div>
      </ThemeProvider>
    </TransitionProvider>
  );
}

/* <DarkModeToggle /> */
