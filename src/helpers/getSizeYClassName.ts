import { AdaptivityProps } from "../components/AdaptivityProvider/AdaptivityContext";

export function getSizeYClassName(
  base: string,
  sizeY?: AdaptivityProps["sizeY"]
): string {
  return `${base}--sizeY-${sizeY ?? "none"}`;
}
