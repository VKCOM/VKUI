import React, { AnchorHTMLAttributes, ElementType, Fragment, HTMLAttributes, InputHTMLAttributes, useContext } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode, noop } from '../../lib/utils';
import Subhead from '../Typography/Subhead/Subhead';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import { ANDROID, VKCOM } from '../../lib/platform';
import { Icon16Done, Icon24Done } from '@vkontakte/icons';
import { ActionSheetContext } from '../ActionSheet/ActionSheetContext';
import Caption from '../Typography/Caption/Caption';
import { withAdaptivity, AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';

export interface ActionSheetItemProps extends
  HTMLAttributes<HTMLElement>,
  AnchorHTMLAttributes<HTMLElement>,
  Pick<InputHTMLAttributes<HTMLInputElement>, 'name' | 'checked' | 'value'>,
  AdaptivityProps {
  mode?: 'default' | 'destructive' | 'cancel';
  before?: React.ReactNode;
  meta?: React.ReactNode;
  subtitle?: React.ReactNode;
  autoclose?: boolean;
  selectable?: boolean;
  disabled?: boolean;
}

const ActionSheetItem: React.FunctionComponent<ActionSheetItemProps> = ({
  className,
  children,
  autoclose,
  mode,
  meta,
  subtitle,
  before,
  selectable,
  value,
  name,
  checked,
  defaultChecked,
  onChange,
  onClick,
  sizeY,
  ...restProps
}: ActionSheetItemProps) => {
  const platform = usePlatform();
  const { onItemClick = () => noop, isDesktop } = useContext(ActionSheetContext);

  let Component: ElementType = 'div';

  if (restProps.href) {
    Component = 'a';
  } else if (selectable) {
    Component = 'label';
  }

  const isCompact = hasReactNode(subtitle) || hasReactNode(meta) || selectable;

  return (
    <Tappable
      {...restProps}
      onClick={onItemClick(onClick, autoclose)}
      className={
        classNames(
          getClassName('ActionSheetItem', platform),
          `ActionSheetItem--${mode}`,
          {
            'ActionSheetItem--compact': isCompact,
            'ActionSheetItem--desktop': isDesktop,
            [`ActionSheetItem--sizeY-${sizeY}`]: sizeY === SizeType.COMPACT,
            'ActionSheetItem--withSubtitle': hasReactNode(subtitle),
          },
          className,
        )
      }
      Component={Component}
    >
      {hasReactNode(before) && <div className="ActionSheetItem__before">{before}</div>}
      <div className="ActionSheetItem__container">
        <div className="ActionSheetItem__content">
          {sizeY === SizeType.COMPACT ?
            <Fragment>
              <Text
                weight={mode === 'cancel' ? 'medium' : 'regular'}
                className="ActionSheetItem__children"
              >
                {children}
              </Text>
              {hasReactNode(meta) &&
                <Text
                  weight="regular"
                  className="ActionSheetItem__meta"
                >
                  {meta}
                </Text>
              }
            </Fragment>
            :
            <Fragment>
              <Title
                weight={mode === 'cancel' ? 'medium' : 'regular'}
                level={isCompact || hasReactNode(before) || platform === ANDROID ? '3' : '2'}
                className="ActionSheetItem__children"
              >
                {children}
              </Title>
              {hasReactNode(meta) &&
                <Title
                  weight="regular"
                  level={isCompact || hasReactNode(before) || platform === ANDROID ? '3' : '2'}
                  className="ActionSheetItem__meta"
                >
                  {meta}
                </Title>
              }
            </Fragment>
          }
        </div>
        {hasReactNode(subtitle) && (sizeY === SizeType.COMPACT ?
          <Caption weight="regular" className="ActionSheetItem__subtitle" level="1">{subtitle}</Caption>
          :
          <Subhead weight="regular" className="ActionSheetItem__subtitle">{subtitle}</Subhead>
        )}
      </div>
      {selectable &&
        <div className="ActionSheetItem__after">
          <input
            type="radio"
            className="ActionSheetItem__radio"
            name={name}
            value={value}
            onChange={onChange}
            defaultChecked={defaultChecked}
            checked={checked}
            disabled={restProps.disabled}
          />
          <div className="ActionSheetItem__marker">
            {platform === VKCOM ? <Icon24Done /> : <Icon16Done />}
          </div>
        </div>
      }
    </Tappable>
  );
};

ActionSheetItem.defaultProps = {
  mode: 'default',
};

export default withAdaptivity(ActionSheetItem, { sizeY: true });
