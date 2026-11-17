import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { AlertActionInterface, AlertProps } from './Alert';
import { AlertAction } from './AlertAction';
import styles from './Alert.module.css';

const alignStyles = {
  left: styles.actionsAlignLeft,
  center: styles.actionsAlignCenter,
  right: styles.actionsAlignRight,
};

const directionStyles = {
  vertical: styles.actionsDirectionVertical,
  horizontal: styles.actionsDirectionHorizontal,
};

type ItemClickHandler = (item: AlertActionInterface) => void;
interface AlertActionsProps
  extends Pick<AlertProps, 'actions' | 'actionsAlign' | 'renderAction' | 'actionsLayout'> {
  /**
   * Обработчик нажатия на одну из опций.
   */
  onItemClick: ItemClickHandler;
}
export const AlertActions = ({
  actions = [],
  renderAction = (props) => <AlertAction {...props} />,
  onItemClick,
  actionsAlign,
  actionsLayout,
}: AlertActionsProps): React.ReactNode => {
  return (
    <div
      className={classNames(
        styles.actions,
        actionsAlign && alignStyles[actionsAlign],
        actionsLayout && directionStyles[actionsLayout],
      )}
    >
      {actions.map((action, i) => {
        // Убираем
        const { title: children, action: _, autoCloseDisabled, ...restProps } = action;

        return (
          <React.Fragment key={i}>
            {renderAction({
              children,
              onClick: () => onItemClick(action),
              ...restProps,
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};
