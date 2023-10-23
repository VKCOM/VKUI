import { ScrollSaverProps } from './ScrollSaver';
import { useScrollSaver } from './useScrollSaver';

export interface ScrollSaverWithCustomRefProps<T = HTMLElement>
  extends Omit<ScrollSaverProps, 'useGetRef'> {
  elementRef: React.RefObject<T>;
}

/* Компонентный Вариант useScrollSaver хука для динамического рендеринга, чтобы можно было пробросить и использовать любой ref
 * children проп можно передать, но ref из него браться не будет */
export function ScrollSaverWithCustomRef(props: ScrollSaverWithCustomRefProps) {
  useScrollSaver(props.elementRef, props.id, props.saveMode);

  return props.children;
}
