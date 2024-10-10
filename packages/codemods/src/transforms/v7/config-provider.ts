import {
  API,
  Collection,
  FileInfo,
  JSCodeshift,
  JSXAttribute,
  JSXSpreadAttribute,
  ObjectProperty,
} from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const CONFIG_PROVIDER_NAME = 'ConfigProvider';
const CONFIG_PROVIDER_PROPS_NAME = 'ConfigProviderProps';
const CONFIG_PROVIDER_CONTEXT_NAME = 'ConfigProviderContext';
const USE_CONFIG_PROVIDER_NAME = 'useConfigProvider';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName: configProviderName } = getImportInfo(j, file, CONFIG_PROVIDER_NAME, alias);
  const { localName: configProviderPropsName } = getImportInfo(
    j,
    file,
    CONFIG_PROVIDER_PROPS_NAME,
    alias,
  );
  const { localName: configProviderContextName } = getImportInfo(
    j,
    file,
    CONFIG_PROVIDER_CONTEXT_NAME,
    alias,
  );
  const { localName: useConfigProviderName } = getImportInfo(
    j,
    file,
    USE_CONFIG_PROVIDER_NAME,
    alias,
  );
  if (
    !configProviderName &&
    !configProviderPropsName &&
    !configProviderContextName &&
    !useConfigProviderName
  ) {
    return source.toSource();
  }

  if (configProviderName) {
    handleConfigProvider(j, api, source, configProviderName);
  }
  if (configProviderContextName) {
    handleConfigProviderContext(j, api, source, configProviderContextName);
  }
  if (useConfigProviderName) {
    handleUseConfigProvider(j, api, source, useConfigProviderName);
  }
  if (configProviderPropsName) {
    handleConfigProviderProps(j, api, source, configProviderPropsName);
  }

  return source.toSource();
}

function handleConfigProviderProps(
  j: JSCodeshift,
  api: API,
  source: Collection,
  localName: string,
) {
  const showReport = () => {
    report(
      api,
      `: "${localName}" has been changed. Manual changes required: need to rename "appearance" field to "colorScheme" in object if it need`,
    );
  };
  const types = source.find(j.TSTypeReference, {
    typeName: { type: 'Identifier', name: localName },
  });
  if (types.length) {
    showReport();
  }
}

function handleUseConfigProvider(j: JSCodeshift, api: API, source: Collection, localName: string) {
  const showReport = () => {
    report(
      api,
      `: "${localName}" has been changed. Manual changes required: need to rename "appearance" field to "colorScheme" in result of hook if it need`,
    );
  };
  const identifiers = source.find(j.Identifier, {
    name: localName,
  });
  if (identifiers.length) {
    showReport();
  }
}

function handleConfigProvider(j: JSCodeshift, api: API, source: Collection, localName: string) {
  const showReport = () => {
    report(
      api,
      `: "${localName}" has been changed. Manual changes required: need to rename "appearance" field to "colorScheme" if it need`,
    );
  };
  source
    .find(j.JSXElement, {
      openingElement: {
        name: {
          name: localName,
        },
      },
    })
    .forEach((path) => {
      const appearanceAttribute = path.node.openingElement.attributes?.find(
        (attr) => attr.type === 'JSXAttribute' && attr.name && attr.name.name === 'appearance',
      ) as JSXAttribute;

      if (appearanceAttribute) {
        appearanceAttribute.name = j.jsxIdentifier('colorScheme');
        return;
      }
      const spreadAttribute = path.node.openingElement.attributes?.find(
        (attr) => attr.type === 'JSXSpreadAttribute',
      ) as JSXSpreadAttribute;
      if (spreadAttribute) {
        showReport();
        return;
      }
      return;
    });
}

function handleConfigProviderContext(
  j: JSCodeshift,
  api: API,
  source: Collection,
  localName: string,
) {
  const showReport = () => {
    report(
      api,
      `: "${localName}" has been changed. Manual changes required: need to rename "appearance" field to "colorScheme" if it need`,
    );
  };

  source
    .find(j.JSXElement, {
      openingElement: {
        name: {
          object: { name: localName },
          property: { name: 'Provider' },
        },
      },
    })
    .forEach((path) => {
      const valueAttribute = path.node.openingElement.attributes?.find(
        (attr) => attr.type === 'JSXAttribute' && attr.name && attr.name.name === 'value',
      ) as JSXAttribute;

      if (!valueAttribute) {
        showReport();
        return;
      }

      const valueExpression =
        valueAttribute.value?.type === 'JSXExpressionContainer'
          ? valueAttribute.value.expression
          : undefined;

      if (!valueExpression) {
        showReport();
        return;
      }

      if (valueExpression.type === 'Identifier') {
        showReport();
        return;
      }

      if (valueExpression.type === 'ObjectExpression') {
        const appearanceProp = valueExpression.properties.find(
          (prop) =>
            prop.type === 'ObjectProperty' &&
            prop.key.type === 'Identifier' &&
            prop.key.name === 'appearance',
        ) as ObjectProperty;
        if (!appearanceProp) {
          showReport();
          return;
        }

        appearanceProp.key = j.identifier('colorScheme');
        return;
      }
      showReport();
      return;
    });
}
