import styleguideConfig from '../../../../styleguide/config.js';

function extractComponentName(path) {
  const match = path.match(/\/([^/]+)\/\1\.tsx$/);
  return match ? match[1] : '';
}

export function getStyleGuideComponents() {
  const componentsSection = styleguideConfig?.sections?.find(
    (section) => section.name === 'Компоненты',
  );

  const handleSections = (sections, resultArray) => {
    sections.forEach((section) => {
      const components =
        typeof section.components === 'function' ? section.components() : section.components;
      resultArray.push(...components.map(extractComponentName));
      if (section.sections) {
        handleSections(section.sections, resultArray);
      }
    });
  };

  const allComponents = [];
  handleSections(componentsSection?.sections, allComponents);

  return allComponents;
}
