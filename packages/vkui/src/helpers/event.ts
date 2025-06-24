export function preventDefault<T extends Element>(e: React.UIEvent<T>) {
  e.preventDefault();
}
