import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

function TextGradientParagh({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const element = useRef(null);

  // useGSAP(() => {
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: element.current,
  //     start: "top 90%",
  //     end: "top 60%",
  //     scrub: true,
  //     markers: true,
  //   },
  // });
  // tl.fromTo(
  //   ".word",
  //   {
  //     opacity: 0.5,
  //   },
  //   {
  //     opacity: 1,
  //     stagger: 0.1,
  //   }
  // );
  //   let words: Array<gsap.TweenTarget> = gsap.utils.toArray(".word");
  //   words.forEach((word, index) => {
  //     gsap.to(
  //       word,
  //       {
  //         opacity: 0.5,
  //       },
  //       {
  //         opacity: 1,
  //         scrollTrigger: {
  //           trigger: word,
  //           start: "top 90%",
  //           end: "top 60%",
  //           scrub: true,
  //           markers: true,
  //         },
  //       }
  //     );
  //   });
  // });

  const words = children!.toString().split(" ");
  return (
    <p
      className={cn(
        "prose prose-2xl max-w-[1280px] p-10 flex flex-wrap",
        className
      )}
    >
      {words.map((word, index) => {
        // return <Word key={index}>{word}</Word>;
        return (
          <span key={index} ref={element} className={cn("mr-3 word")}>
            {word}
          </span>
        );
      })}
    </p>
  );
}

// function Word({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   const wordRef = useRef(null);

//   return (
//     <span ref={wordRef} className={cn("mr-3", className)}>
//       {children}
//     </span>
//   );
// }

export default TextGradientParagh;

/* 

<motion.p
      ref={element}
      className={cn("prose prose-2xl max-w-[1280px] p-10", className)}
      style={{ opacity: scrollYProgress }}
    >
      {words.map((word, index) => {
        return (
          <motion.span
            key={index}
            className="relative inline-block"
            style={{ opacity: scrollYProgress }}
          >
            {word.split("").map((char, index) => {
              return (
                <motion.span
                  key={index}
                  style={{ opacity: scrollYProgress }}
                  className="relative inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </motion.p>

*/
