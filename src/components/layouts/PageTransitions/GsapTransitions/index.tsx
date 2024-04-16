import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  TransitionContext,
  TransitionContextType,
} from "@/context/TransitionContext";
gsap.registerPlugin(useGSAP);

function Transition({ children }: { children: any }) {
  const container = useRef(null);
  const { timeline } = useContext<TransitionContextType>(TransitionContext);
  const [displayChildren, setDisplayChildren] = useState<any>(children);

  useGSAP(
    () => {
      if (children.key === displayChildren.key) return;
      timeline.play().then(() => {
        setDisplayChildren(children);
        window.scrollTo(0, 0);
        timeline.pause().clear();
      });
    },
    { scope: container, dependencies: [children] }
  );

  return <div ref={container}>{displayChildren}</div>;
}

export default Transition;
