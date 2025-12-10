export function defineComponentDisplayNames(Component: React.FC<any>, name: string) {
  Component.displayName = name;
  Object.defineProperty(Component, 'name', {
    value: name,
  });
}
