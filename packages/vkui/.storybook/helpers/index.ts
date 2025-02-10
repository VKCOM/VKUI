import styleguideConfig from '../../../../styleguide/config.js';

function extractComponentName(path: string): string {
  const match = path.match(/\/([^/]+)\/\1\.tsx$/);
  return match ? match[1] : '';
}

export function getStyleGuideComponentsMap() {
  const componentsSection = styleguideConfig.sections.find(
    (section) => section.name === 'Компоненты',
  );
  const resultMap: Record<string, boolean> = {};

  const handleSections = (sections, resultArray: string[]) => {
    sections.forEach((section) => {
      const components =
        typeof section.components === 'function' ? section.components() : section.components;
      resultArray.push(...components);
      if (section.sections) {
        handleSections(section.sections, resultArray);
      }
    });
  };

  const allComponents = [];
  handleSections(componentsSection.sections, allComponents);

  allComponents.forEach((path) => {
    resultMap[extractComponentName(path)] = true;
  });

  return resultMap;
}
