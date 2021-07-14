import { ElementType, FC, AllHTMLAttributes } from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';
import Headline, { HeadlineProps } from '../Headline/Headline';

export interface TitleProps extends AllHTMLAttributes<HTMLElement> {
  weight: 'heavy' | 'bold' | 'semibold' | 'medium' | 'regular';
  level: '1' | '2' | '3';
  Component?: ElementType;
}

const getComponent = (level: TitleProps['level']): ElementType => {
  if (!level) {
    return 'div';
  }

  return ('h' + level) as ElementType;
};

const Title: FC<TitleProps> = ({
  children,
  weight,
  level,
  Component,
  ...restProps
}: TitleProps) => {
  const platform = usePlatform();
  const TitleComponent = Component || getComponent(level);

  if (platform === ANDROID && level === '3') {
    const headlineWeight: HeadlineProps['weight'] = weight === 'regular' ? weight : 'medium';

    return <Headline
      Component={TitleComponent}
      {...restProps}
      weight={headlineWeight}
    >
      {children}
    </Headline>;
  }

  return (
    <TitleComponent
      {...restProps}
      vkuiClass={
        classNames(
          getClassName('Title', platform),
          `Title--w-${weight}`,
          `Title--l-${level}`,
        )
      }
    >
      {children}
    </TitleComponent>
  );
};

export default Title;
