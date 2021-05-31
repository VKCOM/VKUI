import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import Subhead from '../Typography/Subhead/Subhead';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import Headline from '../Typography/Headline/Headline';
import { hasReactNode } from '../../lib/utils';

export interface InfoRowProps extends HTMLAttributes<HTMLDivElement> {
  header: ReactNode;
}

const InfoRow: FunctionComponent<InfoRowProps> = ({ header, children, ...restProps }: InfoRowProps) => {
  const platform = usePlatform();

  return (
    <Headline {...restProps} vkuiClass={getClassName('InfoRow', platform)} weight="regular">
      {hasReactNode(header) &&
        <Subhead Component="span" vkuiClass="InfoRow__header" weight="regular">{header}</Subhead>
      }
      {children}
    </Headline>
  );
};

export default InfoRow;
