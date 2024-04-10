import ScaleOutPT from "@/components/layouts/PageTransitions/ScaleOutPT";
import Stairs from "@/components/layouts/PageTransitions/Stairs";
import Curve from "@/components/layouts/PageTransitions/Curve";
import { cn } from "@/lib/utils";

const Anim = ({
  children,
  pt,
}: {
  children: React.ReactNode;
  pt: "curve" | "stairs" | "scaleOutPT";
}) => {
  switch (pt) {
    case "curve":
      return <Curve>{children}</Curve>;
    case "stairs":
      return <Stairs>{children}</Stairs>;
    case "scaleOutPT":
      return <ScaleOutPT>{children}</ScaleOutPT>;
  }
};

export default function Inner({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Anim pt="curve">
      <div className={cn(``, className)}>{children}</div>
    </Anim>
  );
}
