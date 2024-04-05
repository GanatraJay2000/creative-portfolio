import ScaleOutPT from "@/components/layouts/PageTransitions/ScaleOutPT";
import Stairs from "@/components/layouts/PageTransitions/Stairs";
import Curve from "@/components/layouts/PageTransitions/Curve";
import { delay } from "framer-motion";

export const anim = (variants: any, custom?: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    transition: variants.transition,
    custom,
    variants,
  };
};

export default function Inner({ children }: { children: React.ReactNode }) {
  return <Curve>{children}</Curve>;
  return <Stairs>{children}</Stairs>;
  return <ScaleOutPT>{children}</ScaleOutPT>; // Dont forget to move Header
}
