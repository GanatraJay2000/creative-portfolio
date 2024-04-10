import { anim } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import SidebarLink from "@/components/layouts/Sidebar/SidebarLink";
import Curve from "./Curve";
import MagneticChild from "@/components/GsapMagneticChild";

interface SidebarProps {
  isActive: boolean;
  setIsActive: any;
  links: { title: string; href: string }[];
}

function Sidebar({ isActive, setIsActive, links }: SidebarProps) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const menuSlide = {
    initial: { x: "100%" },
    enter: {
      x: "-100px",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: "100%",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const opacity = {
    initial: { opacity: 0 },
    enter: {
      opacity: 0.6,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const footerLinkHoverEffectClass =
    "after:h-[1.5px] after:bg-white after:w-0 after:hover:w-1/2 after:left-1/2 after:-bottom-1 after:absolute after:hover:left-1/4 after:transition-all relative px-4 py-2";

  return (
    <>
      <motion.div
        {...anim(opacity)}
        className="bg-black fixed left-0 top-0 h-dvh w-dvw z-50"
        onClick={() => {
          setIsActive(false);
        }}
      ></motion.div>
      <motion.div
        {...anim(menuSlide)}
        className="menu fixed right-[-100px] h-dvh bg-[#1c1d20] text-white w-1/3 z-[51]"
      >
        <Curve />
        <div className="menu-body p-24 flex flex-col h-full justify-between">
          <div
            className="menu-nav flex flex-col text-6xl gap-3 mt-20 grow"
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
          >
            <div className="menu-nav-header text-[#999999] border-b border-b-[#999999] uppercase text-sm mb-20 pb-8">
              <p className="">Navigation</p>
            </div>
            {links.map((data, index) => {
              return (
                <SidebarLink
                  setSidebarActive={setIsActive}
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                />
              );
            })}
          </div>
          <div className="menu-nav-header  text-[#999999]  uppercase text-sm pb-5">
            <p className="">Socials</p>
          </div>
          <div className="flex w-full text-sm gap-10">
            <MagneticChild>
              <Link
                className={footerLinkHoverEffectClass}
                target="_blank"
                href="https://github.com/GanatraJay2000"
              >
                Github
              </Link>
            </MagneticChild>
            <MagneticChild>
              <Link
                className={footerLinkHoverEffectClass}
                target="_blank"
                href="https://linkedin.com/in/jay-ganatra"
              >
                LinkedIn
              </Link>
            </MagneticChild>
            <MagneticChild>
              <Link
                className={footerLinkHoverEffectClass}
                target="_blank"
                href="mailto:jganatra@syr.edu"
              >
                Email
              </Link>
            </MagneticChild>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
