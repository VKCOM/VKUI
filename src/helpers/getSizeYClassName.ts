import { AdaptivityProps } from "../hoc/withAdaptivity";

export function getSizeYClassName(
  base: string,
  sizeY?: AdaptivityProps["sizeY"]
): string {
  return `${base}--sizeY-${sizeY ?? "none"}`;
}
