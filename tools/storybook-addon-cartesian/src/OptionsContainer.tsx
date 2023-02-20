import * as React from 'react';
import { OptionNamesProp, OptionsProp } from './types';

const ContainerStyle: React.CSSProperties = {
  margin: '6px',
  display: 'flex',
  flexDirection: 'column',
};
const ItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '2px 0',
};

interface OptionsContainerProps {
  options: OptionsProp;
  checkedOptions: OptionNamesProp;
  onCheckedChange(actual: OptionNamesProp): void;
}

export const OptionsContainer = ({
  options,
  checkedOptions,
  onCheckedChange,
}: OptionsContainerProps) => {
  const changeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const actualCheckedOptions = checkedOptions.includes(name)
      ? checkedOptions.filter((optionName) => optionName !== name)
      : [...checkedOptions, name];

    onCheckedChange(actualCheckedOptions);
  };

  return (
    <div style={ContainerStyle}>
      {Object.keys(options).map((name) => {
        return (
          <label style={ItemStyle} key={name}>
            {name}
            <input
              id={name}
              name={name}
              type="checkbox"
              onChange={changeChecked}
              checked={checkedOptions.includes(name)}
            />
          </label>
        );
      })}
    </div>
  );
};
