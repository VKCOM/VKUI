import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HasRender, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Card.module.css';
import stylesCardGridGlobal from '../CardGrid/CardGrid.global.module.css';
import stylesCardScrollGlobal from '../CardScroll/CardScroll.global.module.css';
import stylesGroupGlobal from '../Group/Group.global.module.css';
import stylesSplitColGlobal from '../SplitCol/SplitCol.global.module.css';

export interface CardProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    HasComponent,
    HasRender<HTMLDivElement> {
  /**
   * Внешний вид карточки.
   */
  mode?: 'tint' | 'shadow' | 'outline' | 'outline-tint' | 'plain' | undefined;
}

/**
 * @see https://vkui.io/components/card
 */
export const Card = ({
  mode = 'tint',
  Component = 'li',
  ...restProps
}: CardProps): React.ReactNode => {
  const withBorder = mode === 'outline' || mode === 'outline-tint';
  return (
    <RootComponent
      {...restProps}
      Component={Component}
      baseClassName={classNames(
        styles.host,
        stylesCardScrollGlobal.cardHost,
        stylesGroupGlobal.cardHost,
        stylesSplitColGlobal.cardHost,
        stylesCardGridGlobal.cardHost,
        mode === 'outline' && styles.modeOutline,
        mode === 'shadow' && styles.modeShadow,
        mode === 'plain' && styles.modePlain,
        withBorder && styles.withBorder,
      )}
    />
  );
};
