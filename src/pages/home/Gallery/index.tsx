import { galleryData } from "@/lib/data";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

function Gallery() {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const speed = 0.1;

  const manageMouseMove = contextSafe(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { movementX, movementY } = e;
      gsap.set(".plane1", {
        x: `+=${movementX * speed * 1.2}`,
        y: `+=${movementY * speed * 1.2}`,
      });
      gsap.set(".plane2", {
        x: `+=${movementX * speed}`,
        y: `+=${movementY * speed}`,
      });
      gsap.set(".plane3", {
        x: `+=${movementX * speed * 0.5}`,
        y: `+=${movementY * speed * 0.5}`,
      });
    }
  );

  return (
    <div
      ref={container}
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="main h-dvh w-full overflow-hidden relative flex justify-center items-center"
    >
      <div className="title">
        <h1 className="text-5xl font-bold">Gallery</h1>
      </div>
      <div className="plane1 h-full w-full absolute brightness-75">
        <Image
          className="absolute left-[80%] top-[70%]"
          src={galleryData.Floating1}
          alt="Floating 1"
          width={300}
        />
        <Image
          className="absolute left-[5%] top-[65%]"
          src={galleryData.Floating2}
          alt="Floating 2"
          width={300}
        />
        <Image
          className="absolute left-[35%] top-[0%]"
          src={galleryData.Floating3}
          alt="Floating 3"
          width={300}
        />
      </div>
      <div className="plane2 h-full w-full absolute brightness-[0.6]">
        <Image
          className="absolute left-[5%] top-[10%]"
          src={galleryData.Floating4}
          alt="Floating 4"
          width={300}
        />
        <Image
          className="absolute left-[80%] top-[5%]"
          src={galleryData.Floating5}
          alt="Floating 5"
          width={300}
        />
        <Image
          className="absolute left-[60%] top-[60%]"
          src={galleryData.Floating6}
          alt="Floating 6"
          width={300}
        />
      </div>
      <div className="plane3 h-full w-full absolute brightness-50">
        <Image
          className="absolute left-[60%] top-[2.5%]"
          src={galleryData.Floating7}
          alt="Floating 7"
          width={300}
        />
        <Image
          className="absolute left-[40%] top-[75%]"
          src={galleryData.Floating8}
          alt="Floating 8"
          width={300}
        />
      </div>
    </div>
  );
}

export default Gallery;
