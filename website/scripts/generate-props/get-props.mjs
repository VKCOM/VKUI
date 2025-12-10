import path from 'path';
import { withCustomConfig } from 'react-docgen-typescript';

function parser(tsconfigPath) {
  return withCustomConfig(tsconfigPath, {
    savePropValueAsString: true,
    shouldExtractValuesFromUnion: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldIncludePropTagMap: true,
    propFilter: (prop) => {
      if (prop.declarations !== undefined && prop.declarations?.length > 0) {
        return Boolean(
          prop.declarations.find((declaration) => !declaration.fileName.includes('node_modules')),
        );
      }

      return true;
    },
  });
}

/**
 * @param {import('react-docgen-typescript').ComponentDoc} componentDoc
 */
function transformProps(componentDoc) {
  const data = { ...componentDoc };

  Object.keys(data.props).forEach((prop) => {
    delete data.props[prop].parent;
    delete data.props[prop].declarations;

    if (data.props[prop].type.name === 'enum') {
      data.props[prop].type.raw = (data.props[prop].type.raw || '')
        .replace(' | undefined', '')
        .replace('undefined |', '')
        .trim();
    }

    if (data.props[prop].defaultValue?.value) {
      data.props[prop].defaultValue = data.props[prop].defaultValue.value;
    } else {
      data.props[prop].defaultValue = null;
    }
  });

  return data.props;
}

const vkuiTSConfigPath = path.resolve('../packages/vkui/tsconfig.dist.json');

export function getProps({ paths }) {
  const docgenParser = parser(vkuiTSConfigPath);
  const parsedData = docgenParser.parse(paths);

  return Object.fromEntries(
    parsedData.map((info) => [
      info.displayName,
      Object.values(transformProps(info)).sort((a, b) => a.name.localeCompare(b.name)),
    ]),
  );
}
