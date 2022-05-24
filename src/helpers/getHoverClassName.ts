import { AdaptivityProps } from "../components/AdaptivityProvider/AdaptivityContext";

export function getHoverClassName(
  base: string,
  hover?: AdaptivityProps["deviceHasHover"]
): string {
  let hoverState = "none";
  if (hover === true) {
    hoverState = "has";
  } else if (hover === false) {
    hoverState = "has-not";
  }

  return `${base}--hover-${hoverState}`;
}
