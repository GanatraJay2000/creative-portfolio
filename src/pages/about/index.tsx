import TextGradientParagh from "@/components/TextGradientParagh";
import Inner from "@/components/layouts/Inner";
import { Fonts } from "@/lib/fonts";
import { useEffect } from "react";
import Gallery from "./Gallery";
import { useSpring } from "framer-motion";

export default function About() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
    })();
  }, []);

  const projects = [
    {
      name: "Dyal Thak",
      handle: "dyal_thak",
    },

    {
      name: "Leidinger Matthias",
      handle: "leidinger_matthias",
    },

    {
      name: "Mark Rammers",
      handle: "mark_rammers",
    },

    {
      name: "Landon Speers",
      handle: "landon_speers",
    },
  ];

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  return (
    <Inner className="">
      <div className="text-3xl font-black">About</div>
      <p className={`py-10 mb-32 `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cumque,
        modi voluptatibus hic, possimus ipsa harum ipsam dolorem fuga,
        voluptatem neque? Ipsa, maxime natus nihil libero ipsam veritatis
        nostrum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim cumque, modi voluptatibus hic, possimus ipsa harum ipsam dolorem
        fuga, voluptatem neque? Ipsa, maxime natus nihil libero ipsam veritatis
        nostrum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim cumque, modi voluptatibus hic, possimus ipsa Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Enim cumque, modi voluptatibus hic,
        possimus ipsa harum ipsam dolorem fuga, voluptatem neque? Ipsa, maxime
        natus nihil libero ipsam veritatis nostrum labore! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Enim cumque, modi voluptatibus hic,
        possimus ipsa harum ipsam dolorem fuga, voluptatem neque? Ipsa, maxime
        natus nihil libero ipsam veritatis nostrum labore! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Enim cumque, modi voluptatibus hic,
        possimus ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim cumque, modi voluptatibus hic, possimus ipsa harum ipsam dolorem
        fuga, voluptatem neque? Ipsa, maxime natus nihil libero ipsam veritatis
        nostrum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim cumque, modi voluptatibus hic, possimus ipsa harum ipsam dolorem
        fuga, voluptatem neque? Ipsa, maxime natus nihil libero ipsam veritatis
        nostrum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim cumque, modi voluptatibus hic, possimus ipsa Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Enim cumque, modi voluptatibus hic,
        possimus ipsa harum ipsam dolorem fuga, voluptatem neque? Ipsa, maxime
        natus nihil libero ipsam veritatis nostrum labore! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Enim cumque, modi voluptatibus hic,
        possimus ipsa harum ipsam dolorem fuga, voluptatem neque? Ipsa, maxime
        natus nihil libero ipsam veritatis nostrum labore! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Enim cumque, modi voluptatibus hic,
        possimus ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim cumque, modi voluptatibus hic, possimus ipsa harum ipsam dolorem
        fuga, voluptatem neque? Ipsa, maxime natus nihil libero ipsam veritatis
        nostrum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim cumque, modi voluptatibus hic, possimus ipsa harum ipsam dolorem
        fuga, voluptatem neque? Ipsa, maxime natus nihil libero ipsam veritatis
        nostrum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim cumque, modi voluptatibus hic, possimus ipsa Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Enim cumque, modi voluptatibus hic,
        possimus ipsa harum ipsam dolorem fuga, voluptatem neque? Ipsa, maxime
        natus nihil libero ipsam veritatis nostrum labore! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Enim cumque, modi voluptatibus hic,
        possimus ipsa harum ipsam dolorem fuga, voluptatem neque? Ipsa, maxime
        natus nihil libero ipsam veritatis nostrum labore! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Enim cumque, modi voluptatibus hic,
        possimus ipsa
      </p>
      <div className="" onMouseMove={(e) => mouseMove(e)}>
        {projects.map(({ handle }, i) => {
          return (
            <Gallery mousePosition={mousePosition ?? { x: null, y: null }} handle={handle} key={i} />
          );
        })}
      </div>
      <TextGradientParagh
        className={`py-10 mb-32 level-2 text-justify ${Fonts.lora} font-black`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cumque,
        modi voluptatibus hic, possimus ipsa harum ipsam dolorem fuga,
        voluptatem neque? Ipsa, maxime natus nihil libero ipsam veritatis
        nostrum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim cumque, modi voluptatibus hic, possimus ipsa harum ipsam dolorem
        fuga, voluptatem neque? Ipsa, maxime natus nihil libero ipsam veritatis
        nostrum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim cumque, modi voluptatibus hic, possimus ipsa
      </TextGradientParagh>
      <div className="p1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus
        dolor lectus, et aliquet ligula consectetur ut. Cras vitae ex at lacus
        consequat hendrerit in sit amet nisl. Fusce ac scelerisque nibh. Fusce
        id justo vitae sem consequat hendrerit. Sed commodo dignissim orci id
        lacinia. Proin non lorem augue. Quisque neque libero, convallis nec
        fringilla vel, viverra quis mauris. Etiam gravida congue erat nec
        semper. Maecenas sodales eros dolor, in congue nibh auctor mattis.
        Praesent at sapien mauris. Curabitur interdum ornare enim, a varius
        ligula finibus sit amet. Maecenas maximus lacus eget gravida fermentum.
        Aliquam sit amet dictum leo. Aliquam sit amet sapien vel tellus maximus
        tempor. Quisque consequat diam at elit consectetur posuere. Suspendisse
        suscipit nec sapien et placerat. Duis ultrices scelerisque eros, id
        pellentesque augue sollicitudin at. Duis bibendum velit in lectus
        pharetra, eu posuere sapien cursus. Cras congue tempor velit, et cursus
        mi. Duis tincidunt lacinia mi ac feugiat. Praesent tincidunt, metus a
        pellentesque eleifend, tellus tellus convallis nisl, vitae luctus risus
        elit et neque. Quisque mauris erat, mattis ac blandit vitae, varius a
        magna. Curabitur ac maximus ex, at cursus dui. Suspendisse malesuada
        diam vel ante pretium, nec porttitor velit volutpat. Suspendisse auctor
        ex nec tempus posuere. Vivamus venenatis tempor pharetra. Fusce euismod
        euismod enim, vestibulum euismod sapien placerat ut. Duis rhoncus
        faucibus dolor et lobortis. Suspendisse vestibulum odio nulla, vel
        tincidunt augue vestibulum eu. Nulla id porta mi. Nam quis convallis
        diam, at scelerisque nisi. Aliquam euismod purus nulla, ut consequat
        lorem tempor eget. Cras non justo ante. Mauris sapien nunc, vestibulum
        in semper nec, mollis ac diam. Nulla volutpat tortor sed elit fermentum,
        a convallis dui posuere. Nam ullamcorper nulla vulputate risus finibus
        posuere. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Phasellus in ultrices augue. Pellentesque
        sagittis arcu lacus, sed sagittis ante sollicitudin eu. Phasellus lorem
        velit, semper non pretium quis, ultrices ut est. Proin eros purus,
        condimentum ut eleifend id, rhoncus vitae neque. Donec euismod dolor
        lorem, vel porta nibh malesuada non. Donec fringilla nibh eget magna
        pulvinar bibendum. Etiam vel auctor justo, sed tempus dui. Etiam non
        odio in ligula tincidunt volutpat.
      </div>
      <div className="full-width"></div>
      <div className="p1 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus
        dolor lectus, et aliquet ligula consectetur ut. Cras vitae ex at lacus
        consequat hendrerit in sit amet nisl. Fusce ac scelerisque nibh. Fusce
        id justo vitae sem consequat hendrerit. Sed commodo dignissim orci id
        lacinia. Proin non lorem augue. Quisque neque libero, convallis nec
        fringilla vel, viverra quis mauris. Etiam gravida congue erat nec
        semper. Maecenas sodales eros dolor, in congue nibh auctor mattis.
        Praesent at sapien mauris. Curabitur interdum ornare enim, a varius
        ligula finibus sit amet. Maecenas maximus lacus eget gravida fermentum.
        Aliquam sit amet dictum leo. Aliquam sit amet sapien vel tellus maximus
        tempor. Quisque consequat diam at elit consectetur posuere. Suspendisse
        suscipit nec sapien et placerat. Duis ultrices scelerisque eros, id
        pellentesque augue sollicitudin at. Duis bibendum velit in lectus
        pharetra, eu posuere sapien cursus. Cras congue tempor velit, et cursus
        mi. Duis tincidunt lacinia mi ac feugiat. Praesent tincidunt, metus a
        pellentesque eleifend, tellus tellus convallis nisl, vitae luctus risus
        elit et neque. Quisque mauris erat, mattis ac blandit vitae, varius a
        magna. Curabitur ac maximus ex, at cursus dui. Suspendisse malesuada
        diam vel ante pretium, nec porttitor velit volutpat. Suspendisse auctor
        ex nec tempus posuere. Vivamus venenatis tempor pharetra. Fusce euismod
        euismod enim, vestibulum euismod sapien placerat ut. Duis rhoncus
        faucibus dolor et lobortis. Suspendisse vestibulum odio nulla, vel
        tincidunt augue vestibulum eu. Nulla id porta mi. Nam quis convallis
        diam, at scelerisque nisi. Aliquam euismod purus nulla, ut consequat
        lorem tempor eget. Cras non justo ante. Mauris sapien nunc, vestibulum
        in semper nec, mollis ac diam. Nulla volutpat tortor sed elit fermentum,
        a convallis dui posuere. Nam ullamcorper nulla vulputate risus finibus
        posuere. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Phasellus in ultrices augue. Pellentesque
        sagittis arcu lacus, sed sagittis ante sollicitudin eu. Phasellus lorem
        velit, semper non pretium quis, ultrices ut est. Proin eros purus,
        condimentum ut eleifend id, rhoncus vitae neque. Donec euismod dolor
        lorem, vel porta nibh malesuada non. Donec fringilla nibh eget magna
        pulvinar bibendum. Etiam vel auctor justo, sed tempus dui. Etiam non
        odio in ligula tincidunt volutpat.
      </div>
      <div className="p1 full-width bg-red-100 py-10">
        <div className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          maximus dolor lectus, et aliquet ligula consectetur ut. Cras vitae ex
          at lacus consequat hendrerit in sit amet nisl. Fusce ac scelerisque
          nibh. Fusce id justo vitae sem consequat hendrerit.
        </div>
        <div className="breakout">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          maximus dolor lectus, et aliquet ligula consectetur ut. Cras vitae ex
          at lacus consequat hendrerit in sit amet nisl. Fusce ac scelerisque
          nibh. Fusce id justo vitae sem consequat hendrerit.
        </div>
      </div>

      <div className="p1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus
        dolor lectus, et aliquet ligula consectetur ut. Cras vitae ex at lacus
        consequat hendrerit in sit amet nisl. Fusce ac scelerisque nibh. Fusce
        id justo vitae sem consequat hendrerit. Sed commodo dignissim orci id
        lacinia. Proin non lorem augue. Quisque neque libero, convallis nec
        fringilla vel, viverra quis mauris. Etiam gravida congue erat nec
        semper. Maecenas sodales eros dolor, in congue nibh auctor mattis.
        Praesent at sapien mauris. Curabitur interdum ornare enim, a varius
        ligula finibus sit amet. Maecenas maximus lacus eget gravida fermentum.
        Aliquam sit amet dictum leo.
      </div>
      <div className="p1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus
        dolor lectus, et aliquet ligula consectetur ut. Cras vitae ex at lacus
        consequat hendrerit in sit amet nisl. Fusce ac scelerisque nibh. Fusce
        id justo vitae sem consequat hendrerit. Sed commodo dignissim orci id
        lacinia. Proin non lorem augue. Quisque neque libero, convallis nec
        fringilla vel, viverra quis mauris. Etiam gravida congue erat nec
        semper. Maecenas sodales eros dolor, in congue nibh auctor mattis.
        Praesent at sapien mauris. Curabitur interdum ornare enim, a varius
        ligula finibus sit amet. Maecenas maximus lacus eget gravida fermentum.
        Aliquam sit amet dictum leo. Aliquam sit amet sapien vel tellus maximus
        tempor. Quisque consequat diam at elit consectetur posuere. Suspendisse
        suscipit nec sapien et placerat. Duis ultrices scelerisque eros, id
        pellentesque augue sollicitudin at. Duis bibendum velit in lectus
        pharetra, eu posuere sapien cursus. Cras congue tempor velit, et cursus
        mi. Duis tincidunt lacinia mi ac feugiat. Praesent tincidunt, metus a
        pellentesque eleifend, tellus tellus convallis nisl, vitae luctus risus
        elit et neque. Quisque mauris erat, mattis ac blandit vitae, varius a
        magna. Curabitur ac maximus ex, at cursus dui. Suspendisse malesuada
        diam vel ante pretium, nec porttitor velit volutpat. Suspendisse auctor
        ex nec tempus posuere. Vivamus venenatis tempor pharetra. Fusce euismod
        euismod enim, vestibulum euismod sapien placerat ut. Duis rhoncus
        faucibus dolor et lobortis. Suspendisse vestibulum odio nulla, vel
        tincidunt augue vestibulum eu. Nulla id porta mi. Nam quis convallis
        diam, at scelerisque nisi. Aliquam euismod purus nulla, ut consequat
        lorem tempor eget. Cras non justo ante. Mauris sapien nunc, vestibulum
        in semper nec, mollis ac diam. Nulla volutpat tortor sed elit fermentum,
        a convallis dui posuere. Nam ullamcorper nulla vulputate risus finibus
        posuere. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Phasellus in ultrices augue. Pellentesque
        sagittis arcu lacus, sed sagittis ante sollicitudin eu. Phasellus lorem
        velit, semper non pretium quis, ultrices ut est. Proin eros purus,
        condimentum ut eleifend id, rhoncus vitae neque. Donec euismod dolor
        lorem, vel porta nibh malesuada non. Donec fringilla nibh eget magna
        pulvinar bibendum. Etiam vel auctor justo, sed tempus dui. Etiam non
        odio in ligula tincidunt volutpat.
      </div>
    </Inner>
  );
}
