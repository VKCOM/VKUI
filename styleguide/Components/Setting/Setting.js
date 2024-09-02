import React, { useContext, useEffect, useRef } from 'react';
import { Icon12InfoCircle, Icon16Dropdown } from '@vkontakte/icons';
import { ActionSheet, ActionSheetItem, classNames, Headline, Link } from '@vkui';
import './Setting.css';
import { Tooltip } from '@vkui/components/Tooltip/Tooltip';
import { StyleGuideContext } from '../StyleGuide/StyleGuideRenderer';

export const Setting = ({
  label,
  onChange,
  value,
  options,
  children,
  disabled,
  hint,
  hintMaxWidth,
  className,
}) => {
  const { setPopout } = useContext(StyleGuideContext);
  const ref = useRef(null);

  useEffect(
    () => () => {
      setPopout(null);
    },
    [],
  );

  const title =
    options?.find((option) => {
      if (typeof option === 'string' || typeof option === 'number') {
        return false;
      }
      return option.value === value;
    })?.title || value;

  return (
    <Headline
      className={classNames('Setting', className, disabled && 'Setting--disabled')}
      weight="3"
    >
      {hint && !disabled ? (
        <Tooltip placement="top" enableInteractive text={hint} maxWidth={hintMaxWidth}>
          <span className="Setting__label Setting__label--has-hint">
            {label} <Icon12InfoCircle className="Setting__labelHint" />
            :&nbsp;
          </span>
        </Tooltip>
      ) : (
        <span className="Setting__label">{label}:&nbsp;</span>
      )}
      {Array.isArray(options) && (
        <Link
          className="Setting__value"
          getRootRef={ref}
          disabled={disabled}
          onClick={() => {
            setPopout(
              <ActionSheet toggleRef={ref} onClose={() => setPopout(null)}>
                {options.map((item) => {
                  const isPrimitive = typeof item === 'string' || typeof item === 'number';
                  const option = isPrimitive ? item : item.value;
                  const title = isPrimitive ? item : item.title;
                  const disabled = isPrimitive ? false : item.disabled;

                  return (
                    <ActionSheetItem
                      key={option}
                      value={option}
                      disabled={disabled}
                      onClick={() => onChange(option)}
                    >
                      {title}
                    </ActionSheetItem>
                  );
                })}
              </ActionSheet>,
            );
          }}
        >
          {title}
          <Icon16Dropdown />
        </Link>
      )}
      {children}
    </Headline>
  );
};
