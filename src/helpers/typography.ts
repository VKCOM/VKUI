export function resolveWeight(
  weight?:
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "heavy"
    | "1"
    | "2"
    | "3"
): "1" | "2" | "3" | undefined {
  switch (weight) {
    case "regular":
      return "3";
    case "semibold":
      return "2";
    case "medium":
    case "bold":
    case "heavy":
      return "1";
    default:
      return weight;
  }
}
