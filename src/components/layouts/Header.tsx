import { cn } from "@/lib/utils";
import Link from "next/link";
import { ForwardedRef, Ref, forwardRef, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Sidebar from "@/components/layouts/Sidebar";
import { AnimatePresence } from "framer-motion";
import MagneticChild from "../GsapMagneticChild";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Header = forwardRef(function Header(
  { className }: { className?: string },
  stickyRef: any
) {
  const burger = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "+=200",
        end: "end",
        scrub: 1,
      },
    });

    if (!isActive) {
      tl.from(burger.current, {
        scale: 0,
      }).to(burger.current, {
        scale: 1,
        duration: 0.05,
      });
    } else {
      tl.to(burger.current, {
        scale: 1,
      });
    }
  }, [isActive]);

  return (
    <>
      <nav className={cn("my-10 flex mx-10", className)}>
        <MagneticChild>
          <div className="text-xl mix-blend-difference z-[10000] text-white relative pointer-events-none">
            <div
              ref={stickyRef}
              className="bounds hover:scale-[3] absolute w-full h-full pointer-events-auto"
            ></div>
            Jay Ganatra
          </div>
        </MagneticChild>
        <div className="grow"></div>
        <div className="nav-links flex gap-10 text-lg text-black">
          {links.map((link) => (
            <Link scroll={false} key={link.title} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
      </nav>

      <div
        ref={burger}
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={cn(
          `fixed right-0 top-0 m-10 z-[52] w-20 h-20 rounded-full cursor-pointer flex justify-center items-center bg-[#1c1d20]`
        )}
      >
        <div
          className={cn("burger", {
            burgerActive: isActive,
          })}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <Sidebar
              isActive={isActive}
              setIsActive={setIsActive}
              links={links}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
});

export default Header;
