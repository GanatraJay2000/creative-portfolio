import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import Shapes from "./Shapes";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Intro() {
  const container = useRef(null);
  const backgroundImage = useRef(null);
  const introImage = useRef(null);
  const slider = useRef(null);
  const p1ref = useRef(null);
  const p2ref = useRef(null);
  let xPercent = 0;
  let direction = 1;

  const updateTextSlider = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent >= 0) xPercent = -100;
    gsap.set(p1ref.current, { xPercent: xPercent });
    gsap.set(p2ref.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(updateTextSlider);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=500px",
          scrub: 1,
        },
      });

      tl.from(backgroundImage.current, {
        clipPath: "inset(10%)",
      })
        .to(
          introImage.current,
          {
            height: "200px",
          },
          0
        )
        .to(backgroundImage.current, {
          height: "130vh",
        });

      requestAnimationFrame(updateTextSlider);

      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          scrub: 0.25,
          onUpdate: (self) => {
            direction = self.direction === 1 ? 1 : -1;
          },
        },
        x: "-300px",
      });
    },
    { scope: container }
  );


  return (
    <div ref={container} className="intro overflow-hidden bg-stone-800">
      <div
        ref={backgroundImage}
        className="backgroundImage absolute top-0 h-[140vh] w-full brightness-[60%]"
      >
        <Image
          className="object-cover object-top w-full h-full"
          src="/assets/images/bg4.jpg"
          fill
          alt="background Image"
        />
      </div>

      <div className="introContainer mt-[55vh] flex items-center justify-center mb-72">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="introImage absolute w-[350px] h-[475px] brightness-[80%]"
        >
          <Image
            src="/assets/images/intro.jpg"
            fill
            alt="Intro Image"
            className="object-cover object-top"
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="text-7xl font-bold z-10 text-white uppercase"
        >
          Jay Ganatra
        </h1>
      </div>
      <div ref={slider} className="mt-[4vh] bg-red-300 whitespace-nowrap flex relative">
        <p
          ref={p1ref}
          className="text-white absolute text-[250px] font-bold m-0 z-[99999999]"
        >
          Infinite Scroll -
        </p>
        <p
          ref={p2ref}
          className="text-white  absolute text-[250px] left-full font-bold m-0 z-[99999999]"
        >
          Infinite Scroll -
        </p>
      </div>

      <div className="mt-96 h-[90vh] w-full bg-slate-900 text-red">
        <Shapes />
      </div>
    </div>
  );
}

export default Intro;
