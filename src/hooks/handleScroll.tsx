import { RefObject } from "react";

export function handleScroll(ref: RefObject<HTMLDivElement>) {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  }