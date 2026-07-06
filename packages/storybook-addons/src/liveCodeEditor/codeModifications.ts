/**
 * Находит название первого аргумента функции: `(props: ComponentProps)`
 * match[1] - имя аргумента
 */
const STORY_ARGUMENT_REGEX = /\((\w*)(:\s*\w*\s*)?\)/;

const stringifyStringPropertyValue = (value: string) => {
  if (!value.includes('"')) {
    return `"${value}"`;
  }

  if (!value.includes("'")) {
    return `{'${value}'}`;
  }

  return `{\`${value.replaceAll('`', '\\`')}\`}`;
};

export const addComponentExport = (code: string, name: string) => {
  if (code.startsWith('(')) {
    return `export const ${name} = ${code}`;
  }

  if (code.startsWith('function')) {
    return `export ${code};`;
  }

  return code;
};

export const inlinePropsSpread = (storyCode: string, storyArgs: any) => {
  const storyArgumentMatch = storyCode.match(STORY_ARGUMENT_REGEX);

  if (!storyArgumentMatch) {
    return storyCode;
  }

  const storyArgument = storyArgumentMatch[1];
  const storyArgsSubstringWithSpace = Object.entries(storyArgs)
    .map(([key, value]) => {
      switch (typeof value) {
        case 'boolean': {
          return value ? key : `${key}={false}`;
        }
        case 'string': {
          // JSON.stringify заэкранирует нужные кавычки
          return `${key}=${stringifyStringPropertyValue(value)}`;
        }
        case 'number': {
          return `${key}={${value}}`;
        }
        default: {
          // Не инлайним св-ва объекты/функции
          return `${key}={${storyArgument}.${key}}`;
        }
      }
    })
    .join(' ');

  // Меняем спред на св-ва, если св-в нет, то удаляем пробел
  return storyCode.replaceAll(
    ` {...${storyArgument}}`,
    storyArgsSubstringWithSpace ? ` ${storyArgsSubstringWithSpace}` : '',
  );
};
