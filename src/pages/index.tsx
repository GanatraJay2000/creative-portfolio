// import Inner from "@/components/layouts/Inner";
import { useEffect } from "react";
import Intro from "@/pages/home/Intro";
import Description from "@/pages/home/Description";
import Projects from "@/pages/home/Projects";
import Works from "@/pages/home/Works";
import Inner from "@/components/layouts/Inner";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <Inner>
      <Intro />
      <Description />
      <Works />
      <Projects />
    </Inner>
  );
}
