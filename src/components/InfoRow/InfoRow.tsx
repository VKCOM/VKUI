import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import Subhead from '../Typography/Subhead/Subhead';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import Headline from '../Typography/Headline/Headline';
import { hasReactNode } from '../../lib/utils';

export interface InfoRowProps extends HTMLAttributes<HTMLDivElement> {
  header: ReactNode;
}

const InfoRow: FunctionComponent<InfoRowProps> = ({ header, className, children, ...restProps }: InfoRowProps) => {
  const platform = usePlatform();
  const baseClassName = getClassName('InfoRow', platform);

  return (
    <Headline {...restProps} weight="regular" className={classNames(baseClassName, className)}>
      {hasReactNode(header) &&
        <Subhead Component="div" className="InfoRow__header" weight="regular">{header}</Subhead>
      }
      {children}
    </Headline>
  );
};

export default InfoRow;
