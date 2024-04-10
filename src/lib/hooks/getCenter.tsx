import { m } from "framer-motion";
import { useState, useEffect } from "react";

const getCenter = ({
  e,
  ref,
}: {
  e: MouseEvent;
  ref: React.RefObject<HTMLElement>;
}) => {
  const { clientX, clientY } = e;
  const { height, width, left, top } = ref.current!.getBoundingClientRect();
  const x = clientX - (left + width / 2);
  const y = clientY - (top + height / 2);

  return { x, y };
};

export default getCenter;
