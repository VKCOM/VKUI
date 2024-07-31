import { kebabCase } from 'lodash-es';
import { onlyText } from 'react-children-utilities';

export const getDeprecatedFromComponentTags = (component) => {
  const { deprecated } = component?.props?.tags || {};

  const description =
    process.env.NODE_ENV === 'development' && process.env.VKUI_STYLEGUIDE_PROPSPARSER !== 1
      ? deprecated?.[0]?.description // baseConfig
      : deprecated; // prodConfig

  return {
    isDeprecated: !!deprecated,
    description,
  };
};

export * from './useViewPortSize';

export const generateIdByReactNode = (children) => {
  const text = onlyText(children);
  if (typeof text === 'string') {
    return kebabCase(text);
  }
  return;
};
