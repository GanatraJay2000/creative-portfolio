import { createContext, useState } from "react";
import gsap from "gsap";

export type TransitionContextType = {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
};

export const TransitionContext = createContext<TransitionContextType>({
  timeline: {} as gsap.core.Timeline,
  setTimeline: () => {},
});
export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [timeline, setTimeline] = useState(() => {
    return gsap.timeline({ paused: true });
  });

  return (
    <TransitionContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </TransitionContext.Provider>
  );
};
