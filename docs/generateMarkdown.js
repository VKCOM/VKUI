let listDeep = 0;

function stringOfLength(string, length) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    newString += string;
  }
  return newString;
}

function generateTitle(name) {
  let title = '`' + name + '` (component)';
  return title + '\n' + stringOfLength('=', title.length) + '\n';
}

function generateDesciption(description) {
  return description + '\n';
}

function generatePropType(type) {
  let result = '';

  switch (type.name) {
    case 'enum':
      result += `${type.value.map(generatePropType).join('|')}`;
      break;
    case 'union':
      listDeep++;
      result += 'oneOfType\n' +
        type.value.map(generatePropType).join('\n');
      listDeep--;
      break;
    case 'arrayOf':
      result += 'arrayOf\n' +
        generatePropType(type.value);
      break;
    case 'shape':
      listDeep++;
      result += 'shape\n' +
        Object.keys(type.value).map(shapeItem => `${shapeItem}: ${generatePropType(type.value[shapeItem])}`).join(',\n');
      listDeep--;
      break;
    default:
      result += type.name || type.value;
  }
  return result;
}

function generateProps(props) {
  let result = '## Props: \n\n';

  for (let prop in props) {
    if (props.hasOwnProperty(prop)) {
      result += `#### ${prop} \n\n`;
      result += `required: \`${props[prop].required}\` \n\n`;
      if (props[prop].defaultValue !== undefined) {
        result += `defaultValue: \`${props[prop].defaultValue.value}\` \n\n`
      }
      result += `type: ${generatePropType(props[prop].type)} \n`;
      result += '\n';
    }
  }

  return result;
}

function generateMarkdown(name, reactAPI) {
  return generateTitle(name) +
    generateDesciption(reactAPI.description) +
    generateProps(reactAPI.props);
}

module.exports = generateMarkdown;