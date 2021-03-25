import React from 'react';
import './Setting.css';
import { Headline, Link, classNames } from '@vkui';
import { Icon16Dropdown } from '@vkontakte/icons';

export const Setting = ({ label, onChange, value, options, children, disabled }) => {
  return (
    <Headline className={classNames('Setting', {
      'Setting--disabled': disabled,
    })} weight="regular">
      <span className="Setting__label">{label}:&nbsp;</span>
      {Array.isArray(options) &&
        <Link className="Setting__value" disabled={disabled}>
          {value}
          <Icon16Dropdown />
          <select className="Setting__select" onChange={onChange} value={value} disabled={disabled}>
            {options.map((item) => {
              const isPrimitive = typeof item === 'string' || typeof item === 'number'
              const value = isPrimitive ? item : item.value;
              const title = isPrimitive ? item : item.title;
              return (
                <option key={value} value={value}>{title}</option>
              )
            })}
          </select>
        </Link>
      }
      {children}
    </Headline>
  )
}
