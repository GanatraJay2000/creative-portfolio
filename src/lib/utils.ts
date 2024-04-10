import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const anim = (variants: any, custom?: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    transition: variants.transition,
    custom: variants.custom,
    variants,
  };
};
