import Link from "next/link";
import { anim } from "@/lib/utils";
import { motion } from "framer-motion";

interface SidebarLinkProps {
  data: { title: string; href: string; index: number };
  isActive: boolean;
  setSelectedIndicator: any;
  setSidebarActive: any;
}

export default function SidebarLink({
  data,
  isActive,
  setSelectedIndicator,
  setSidebarActive,
}: SidebarLinkProps) {
  const { title, href, index } = data;

  const slide = {
    custom: index,
    initial: { x: "80px" },
    enter: (index: number) => ({
      x: "0px",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: index * 0.1,
      },
    }),
    exit: (index: number) => ({
      x: "80px",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: index * 0.1,
      },
    }),
  };

  return (
    <motion.div
      className="mb-5 relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      {...anim(slide)}
    >
      <motion.div
        initial={false}
        animate={isActive ? "open" : "closed"}
        variants={{
          open: { scale: 1 },
          closed: { scale: 0 },
        }}
        className="w-3 h-3 bg-white rounded-full absolute -left-8"
      ></motion.div>
      <Link
        onClick={() => {
          setSidebarActive(false);
        }}
        scroll={false}
        href={href}
      >
        {title}
      </Link>
    </motion.div>
  );
}
