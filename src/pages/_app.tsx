import { DarkModeToggle } from "@/components/layouts/DarkModeToggle";
import Header from "@/components/layouts/Header";
import Inner from "@/components/layouts/PageTransitions/ScaleOutPT";
import { ThemeProvider } from "@/components/layouts/ThemeProvider";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="content-grid-restricted">
        <Header className="content-part" />
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

/* <DarkModeToggle /> */
