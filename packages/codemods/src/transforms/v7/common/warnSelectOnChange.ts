import { API, Collection } from 'jscodeshift';
import { report } from '../../../report';

export const warnSelectOnChange = (api: API, source: Collection, componentName: string) => {
  const j = api.jscodeshift;
  source
    .find(j.JSXOpeningElement, { name: { name: componentName } })
    .find(j.JSXAttribute)
    .filter((attr) => attr.node.name.name === 'onChange')
    .forEach(() => {
      report(
        api,
        `Manual changes required for ${componentName}'s "onChange" prop: need to change event argument to select value`,
      );
    });
};
