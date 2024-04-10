import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import getCenter from "@/lib/hooks/getCenter";
gsap.registerPlugin(useGSAP);

export default function MagneticChild({
  children,
}: {
  children: React.ReactElement;
}) {
  const magnetic = useRef<HTMLElement>(null);

  useGSAP(() => {
    const current = magnetic.current;
    if (!current) return;

    const xTo = gsap.quickTo(current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e: MouseEvent) => {
      const { x, y } = getCenter({ e, ref: magnetic });
      xTo(x * 0.1);
      yTo(y * 0.1);
    };

    const mouseLeave = (e: MouseEvent) => {
      gsap.to(current, { x: 0, duration: 1 });
      gsap.to(current, { y: 0, duration: 1 });
      xTo(0);
      yTo(0);
    };

    current.addEventListener("mousemove", mouseMove);
    current.addEventListener("mouseleave", mouseLeave);

    return () => {
      current.removeEventListener("mousemove", mouseMove);
      current.removeEventListener("mouseleave", mouseLeave);
    };
  });

  return React.cloneElement(children, { ref: magnetic });
}
