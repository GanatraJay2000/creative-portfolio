// import Inner from "@/components/layouts/Inner";
import { useContext, useEffect, useRef } from "react";
import Intro from "@/pages/home/Intro";
import Description from "@/pages/home/Description";
import Projects from "@/pages/home/Projects";
import Works from "@/pages/home/Works";
import Inner from "@/components/layouts/Inner";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  TransitionContext,
  TransitionContextType,
} from "@/context/TransitionContext";
import Gallery from "./home/Gallery";
gsap.registerPlugin(useGSAP);

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
      <Gallery />
      <Works />
      <Projects />
    </Inner>
  );
}
