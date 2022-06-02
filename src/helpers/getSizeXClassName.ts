import { AdaptivityProps } from "../components/AdaptivityProvider/AdaptivityContext";

export function getSizeXClassName(
  base: string,
  sizeX?: AdaptivityProps["sizeX"]
): string {
  return `${base}--sizeX-${sizeX ?? "none"}`;
}
