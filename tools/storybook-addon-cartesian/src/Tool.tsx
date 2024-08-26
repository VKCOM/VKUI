import * as React from 'react';
import { IconButton, WithTooltipPure } from '@storybook/components';
import { GridIcon } from '@storybook/icons';
import { useArgs, useArgTypes, useParameter } from '@storybook/manager-api';
import type { ArgTypes } from '@storybook/types';
import { OptionsContainer } from './OptionsContainer';
import { BooleanOpts } from './constants';
import type { CartesianConfigParameter, OptionNamesProp, OptionsProp } from './types';

const getOptionsFromArgTypes = (argTypes: ArgTypes) =>
  Object.entries(argTypes).reduce<OptionsProp>((options, [argName, argValue]) => {
    const controlType =
      typeof argValue.control === 'string'
        ? argValue.control
        : typeof argValue.control === 'object'
          ? argValue.control.type
          : undefined;
    const hasOptions = argValue.options && argValue.options.length > 0;

    if ('boolean' === controlType || hasOptions) {
      options[argName] = controlType === 'boolean' ? BooleanOpts : argValue.options;
    }
    return options;
  }, {});

const getCartesianFromOptions = (options: OptionsProp, checkedOptions: OptionNamesProp) =>
  Object.keys(options)
    .filter((optionName) => checkedOptions.includes(optionName))
    .reduce<OptionsProp>((actualOptions, optionName) => {
      actualOptions[optionName] = options[optionName];
      return actualOptions;
    }, {});

export const Tool = () => {
  const argTypes = useArgTypes();
  const [, updateArgs] = useArgs();
  const fileName = useParameter('fileName');
  const [isVisible, setIsVisible] = React.useState(false);
  const [checkedOptions, setCheckedOptions] = React.useState<OptionNamesProp>([]);
  const cartesianConfig = useParameter<CartesianConfigParameter>('cartesian');

  React.useEffect(() => {
    // При смене story сбрасываем массив с выбранными пропами
    setCheckedOptions([]);
  }, [fileName]);

  const options = React.useMemo(() => getOptionsFromArgTypes(argTypes), [argTypes]);

  const onCheckedChange = (actualChecked: OptionNamesProp) => {
    setCheckedOptions(actualChecked);
    updateArgs({
      cartesian: actualChecked.length ? getCartesianFromOptions(options, actualChecked) : null,
    });
  };

  if (cartesianConfig?.disable) {
    return null;
  }

  return (
    <WithTooltipPure
      trigger="click"
      placement="bottom"
      visible={isVisible}
      closeOnOutsideClick
      onVisibleChange={setIsVisible}
      tooltip={() => (
        <OptionsContainer
          options={options}
          checkedOptions={checkedOptions}
          onCheckedChange={onCheckedChange}
        />
      )}
    >
      <IconButton>
        <GridIcon />
        &nbsp; cartesian
      </IconButton>
    </WithTooltipPure>
  );
};
