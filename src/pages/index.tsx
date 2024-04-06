// import Inner from "@/components/layouts/Inner";
import { useEffect } from "react";
import Intro from "@/pages/home/Intro";
import Description from "@/pages/home/Description";
import Projects from "@/pages/home/Projects";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Intro />
      <Description />
      <Projects />
    </>
  );
}
