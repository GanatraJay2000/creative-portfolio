import { Inter, Lora, Source_Sans_3 } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const Fonts = {
  inter: inter.className,
  sourceSans3: sourceSans3.className,
  lora: lora.className,
};
