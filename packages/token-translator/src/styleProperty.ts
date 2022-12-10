import valueParser from 'postcss-value-parser';
import _tokens from './tokens.json';

interface Token {
  default?: string;
  background?: string;
  stroke?: string;
  icon?: string;
}

const tokens = _tokens as {
  [key: string]: Token;
};

const styleProperty: {
  title: keyof Token;
  props: string[];
}[] = [
  {
    title: 'stroke',
    props: ['box-shadow', 'border', 'border-color', 'boxShadow', 'borderColor'],
  },
  {
    title: 'background',
    props: ['background', 'background-color', 'backgroundColor'],
  },
];

export function getVKUIToken(selector: string, property: string, appearanceToken: string) {
  const vkuiTokens = tokens[appearanceToken];
  if (!vkuiTokens) {
    return null;
  }

  if (!vkuiTokens['default']) {
    console.warn(`Can't translate "${appearanceToken}" to vkui-tokens`);
    return null;
  }

  let vkuiProperty: keyof Token = 'default';
  styleProperty.some((a) => {
    if (!a.props.includes(property)) {
      return false;
    }
    vkuiProperty = a.title;
    return true;
  });
  if (selector.includes('Icon')) {
    vkuiProperty = 'icon';
  }
  return vkuiTokens[vkuiProperty] ?? vkuiTokens.default;
}

export function getCustomVariables(value: string): string[] {
  if (!value) {
    return [];
  }
  const customVariables: string[] = [];
  const parsedValue = valueParser(value);
  parsedValue.walk((node) => {
    if (node.type !== 'function' || node.value !== 'var') {
      return;
    }
    node.nodes.forEach((subNodes) => {
      if (subNodes.type !== 'word') {
        return;
      }
      customVariables.push(subNodes.value);
    });
  });

  return customVariables;
}
