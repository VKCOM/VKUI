import { AdaptivityProps } from "../hoc/withAdaptivity";

export function getSizeXClassName(
  base: string,
  sizeX?: AdaptivityProps["sizeX"]
): string {
  if (!sizeX) {
    return `${base}--sizeX-none`;
  }

  return `${base}--sizeX-${sizeX}`;
}
