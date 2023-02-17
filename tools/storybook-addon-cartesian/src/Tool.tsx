import * as React from 'react';
import { ArgTypes, useArgs, useArgTypes, useParameter } from '@storybook/api';
import { IconButton, Icons, WithTooltipPure } from '@storybook/components';
import { OptionsContainer } from './OptionsContainer';
import { BooleanOpts } from './constants';
import { CartesianConfigParameter, OptionNamesProp, OptionsProp } from './types';

const getOptionsFromArgTypes = (argTypes: ArgTypes) =>
  Object.entries(argTypes).reduce<OptionsProp>((options, [argName, argValue]) => {
    if ('boolean' === argValue.control?.type || argValue.options?.length > 0) {
      options[argName] = argValue.control?.type === 'boolean' ? BooleanOpts : argValue.options;
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
      tooltipShown={isVisible}
      onVisibilityChange={setIsVisible}
      tooltip={() => (
        <OptionsContainer
          options={options}
          checkedOptions={checkedOptions}
          onCheckedChange={onCheckedChange}
        />
      )}
    >
      <IconButton>
        <Icons icon="grid" />
        &nbsp; cartesian
      </IconButton>
    </WithTooltipPure>
  );
};
