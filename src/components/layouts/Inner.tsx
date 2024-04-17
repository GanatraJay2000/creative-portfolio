import ScaleOutPT from "@/components/layouts/PageTransitions/ScaleOutPT";
import Stairs from "@/components/layouts/PageTransitions/Stairs";
import Curve from "@/components/layouts/PageTransitions/Curve";
import { cn } from "@/lib/utils";
import { useContext, useRef } from "react";
import {
  TransitionContext,
  TransitionContextType,
} from "@/context/TransitionContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Pixels from "./PageTransitions/Pixels";
import Header from "./Header";
gsap.registerPlugin(useGSAP);

type type = "curve" | "stairs" | "scaleOutPT" | "pixels" | "none";

const Anim = ({ children, pt }: { children: React.ReactNode; pt: type }) => {
  switch (pt) {
    case "curve":
      return <Curve>{children}</Curve>;
    case "stairs":
      return <Stairs>{children}</Stairs>;
    case "scaleOutPT":
      return <ScaleOutPT>{children}</ScaleOutPT>;
    case "pixels":
      return <Pixels>{children}</Pixels>;
    default:
      return <>{children}</>;
  }
};

export default function Inner({
  children,
  className,
  type = "pixels",
}: {
  children: React.ReactNode;
  className?: string;
  type?: type;
}) {
  const container = useRef(null);
  const { timeline } = useContext<TransitionContextType>(TransitionContext);
  useGSAP(
    () => {
      gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1 });
      timeline.add(gsap.to(container.current, { opacity: 0 }));
    },
    { scope: container }
  );
  return (
    // <div ref={container}>
    <div>
      <Anim pt={type}>
        <div className={cn(``, className)}>
          <Header />
          {children}
        </div>
      </Anim>
    </div>
  );
}
