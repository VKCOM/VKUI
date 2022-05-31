export function now() {
  return performance && performance.now ? performance.now() : Date.now();
}
