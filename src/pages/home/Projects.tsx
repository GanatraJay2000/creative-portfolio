import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  const [selectedProjects, setSelectedProjects] = useState(0);

  const projectsContainer = useRef(null);
  const imageContainer = useRef(null);

  const projects = [
    { title: "Salar de Atacama", src: "salar_de_atacama.jpg" },
    { title: "Valle de la luna", src: "valle_de_la_muerte.jpeg" },
    { title: "Miscanti Lake", src: "miscani_lake.jpeg" },
    { title: "Miniques Lagoons", src: "miniques_lagoon.jpg" },
  ];

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: imageContainer.current,
        start: "-=100px",
        end: document.body.offsetHeight,
        pin: true,
      });
    },
    { scope: projectsContainer }
  );
  return (
    <div
      ref={projectsContainer}
      className="Projects flex flex-col p-[10%] text-white bg-[#1c1d20]"
    >
      <div className="projectDescription flex h-[700px] gap-5 w-full justify-between">
        <div
          ref={imageContainer}
          className="imageContainer relative h-full w-[40%]"
        >
          <Image
            src={`/assets/images/${projects[selectedProjects].src}`}
            alt={projects[selectedProjects].title}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-[20%] prose prose-invert prose-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
          dolorem? Odio eligendi provident officiis facilis aliquid, laborum
          eaque sunt earum illum aut ratione.
        </div>
        <div className="w-[20%] prose prose-invert prose-lg flex items-end ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
          dolorem? Odio eligendi provident officiis facilis aliquid, laborum
          eaque sunt earum illum aut ratione, omnis at dicta velit, aperiam
          inventore eum, , omnis at dicta velit, aperiam inventore eum.
        </div>
      </div>

      <div className="projectList mt-[200px] flex flex-col">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseOver={() => setSelectedProjects(index)}
            className={`projectEl flex justify-end border-t border-t-white pt-10 pb-5 ${
              index === projects.length - 1 ? "border-b" : ""
            }`}
          >
            <h1 className="prose text-6xl font-bold prose-invert">
              {project.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
