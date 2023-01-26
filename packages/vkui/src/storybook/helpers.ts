import { FigmaUrls } from './constants';

export function getFigmaPage(componentName: keyof typeof FigmaUrls) {
  return {
    design: {
      type: 'figma',
      url: FigmaUrls[componentName],
    },
  };
}
