import { useInsets } from "../hooks/useInsets";
import { HasInsets } from "../types";

export function withInsets<T extends HasInsets>(
  Component: React.ComponentType<T>
): React.FC<Omit<T, keyof HasInsets>> {
  function WithInsets(props: Omit<T, keyof HasInsets>) {
    const insets = useInsets();
    return <Component {...(props as T)} insets={insets} />;
  }
  return WithInsets;
}
