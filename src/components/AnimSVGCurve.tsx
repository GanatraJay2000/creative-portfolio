import { progress } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimSVGCurve() {
  const path = useRef(null);
  const svgContainer = useRef(null);
  const box = useRef(null);
  const [x, setX] = useState(0.5);
  let reqId: number | null = null;
  let time = Math.PI / 2;
  let progress = 0;

  useEffect(() => {
    setPath({ progress: 0 });
  }, []);

  const setPath = ({ progress }: { progress: number }) => {
    if (!svgContainer.current || !path.current) return;
    const width = (svgContainer.current as HTMLElement).offsetWidth;
    (path.current as HTMLElement).setAttributeNS(
      "",
      "d",
      `M 0 50 Q ${width * x} ${50 + progress}, ${width} 50`
    );
  };

  const mouseMoveEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!box.current || !svgContainer.current || !path.current) return;
    const { clientY, clientX } = e;
    const { top, height, left, width } = (
      box.current as HTMLElement
    ).getBoundingClientRect();
    setX((clientX - left) / width);
    const center = top + height / 2;
    progress = clientY - center;
    setPath({ progress });
  };

  const lerp = (start: number, end: number, t: number) => {
    return start * (1 - t) + end * t;
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    time += 0.2;
    setPath({ progress: newProgress });
    progress = lerp(progress, 0, 0.025);
    if (Math.abs(progress) > 0.75)
      reqId = window.requestAnimationFrame(animateOut);
    else resetAnimation();
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div ref={svgContainer} className="line relative mt-10 mb-3 h-0.5 w-full">
      <div
        ref={box}
        onMouseEnter={() => {
          window.cancelAnimationFrame(reqId!);
          resetAnimation();
        }}
        onMouseMove={mouseMoveEvent}
        onMouseLeave={() => animateOut()}
        className="box h-10 relative top-[-20px] z-10  hover:h-[200px] hover:top-[-100px]"
      ></div>
      <svg className="w-full h-[100px] absolute top-[-50px]">
        <path ref={path} className="stroke-1 stroke-black fill-none"></path>
      </svg>
    </div>
  );
}

export default AnimSVGCurve;
