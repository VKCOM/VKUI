import { COMPONENTS_TO_FIGMA_COMMON_DESIGN_URL } from './componentsToFigmaCommonDesignUrl';
import { COMPONENTS_TO_FIGMA_IOS_DESIGN_URL } from './componentsToFigmaIOSDesignUrl';

export const createStoryParameters = (
  componentName: string,
  ...additionalParameters: Array<Record<string, any>>
) => {
  const parameters = additionalParameters.reduce((result, parameters) => {
    return Object.assign(result, parameters);
  }, {});
  const commonDesignUrl = COMPONENTS_TO_FIGMA_COMMON_DESIGN_URL[componentName];
  const iosDesignUrl = COMPONENTS_TO_FIGMA_IOS_DESIGN_URL[componentName];
  if (commonDesignUrl || iosDesignUrl) {
    parameters.design = [
      commonDesignUrl && {
        name: 'Web/Android',
        type: 'figma',
        url: commonDesignUrl,
      },
      iosDesignUrl && {
        name: 'IOS',
        type: 'figma',
        url: iosDesignUrl,
      },
    ].filter(Boolean);
  }
  return parameters;
};
