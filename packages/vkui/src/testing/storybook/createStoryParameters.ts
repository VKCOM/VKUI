import { COMPONENTS_TO_FIGMA_DESIGN_URL } from './componentsToFigmaDesignUrl';

export const createStoryParameters = (
  componentName: string,
  ...additionalParameters: Array<Record<string, any>>
) => {
  const parameters = additionalParameters.reduce((result, parameters) => {
    return Object.assign(result, parameters);
  }, {});
  const designUrl = COMPONENTS_TO_FIGMA_DESIGN_URL[componentName];
  if (designUrl) {
    parameters.design = {
      type: 'figma',
      url: designUrl,
    };
  }
  return parameters;
};
