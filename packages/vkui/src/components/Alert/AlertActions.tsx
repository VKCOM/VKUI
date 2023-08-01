import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { AlertActionInterface, AlertProps } from './Alert';
import { AlertAction } from './AlertAction';
import styles from './Alert.module.css';

const alignStyles = {
  left: styles['Alert__actions--align-left'],
  center: styles['Alert__actions--align-center'],
  right: styles['Alert__actions--align-right'],
};

const directionStyles = {
  vertical: styles['Alert__actions--direction-vertical'],
  horizontal: styles['Alert__actions--direction-horizontal'],
};

type ItemClickHandler = (item: AlertActionInterface) => void;
interface AlertActionsProps
  extends Pick<AlertProps, 'actions' | 'actionsAlign' | 'renderAction' | 'actionsLayout'> {
  onItemClick: ItemClickHandler;
}
export const AlertActions = ({
  actions = [],
  renderAction = (props) => <AlertAction {...props} />,
  onItemClick,
  actionsAlign,
  actionsLayout,
}: AlertActionsProps) => {
  const platform = usePlatform();

  const direction: AlertProps['actionsLayout'] =
    platform === Platform.VKCOM ? 'horizontal' : actionsLayout;

  return (
    <div
      className={classNames(
        styles['Alert__actions'],
        actionsAlign && alignStyles[actionsAlign],
        direction && directionStyles[direction],
      )}
    >
      {actions.map((action, i) => (
        <React.Fragment key={i}>
          {renderAction({
            ...action,
            onClick: () => onItemClick(action),
          })}
        </React.Fragment>
      ))}
    </div>
  );
};
