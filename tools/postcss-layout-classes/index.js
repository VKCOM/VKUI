const { loadSource, createMockRequire, runInContext } = require('./helpers');

const DESIGN_SYSTEM_SIZES_FILE_PATH = 'packages/vkui/src/lib/spacings/sizes.ts';
const LAYOUT_PROPS_FILE_PATH = 'packages/vkui/src/lib/layouts/layoutProps.ts';
const COMPONENT_PROPS_FILE_PATH = 'packages/vkui/src/lib/layouts/componentProps.ts';
const BREAKPOINTS_FILE_PATH = 'packages/vkui/src/lib/adaptivity/breakpoints.ts';
const HELPERS_FILE_PATH = 'packages/vkui/src/lib/layouts/helpers.ts';
const LAYOUT_CSS_SUFFIX = '/layout.css';

const requiredExports = [
  'LAYOUT_PROPS',
  'COMPONENTS_PROPS',
  'NEW_BREAKPOINTS',
  'widthPlus',
  'generateConstantClassName',
  'generateVariableClassName',
  'generateVariable',
];

const addDeclarationFactory = (root) => (node, selector, prop, value) => {
  node.append({
    selector,
    source: root.source,
    raws: { semicolon: true },
    nodes: [{ prop, value, source: root.source }],
  });
};

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  return {
    postcssPlugin: 'postcss-layout-classes',
    Once(root, { AtRule }) {
      if (!root.source || !root.source.input.file.endsWith(LAYOUT_CSS_SUFFIX)) {
        return;
      }

      root.removeAll();

      const sources = [
        DESIGN_SYSTEM_SIZES_FILE_PATH,
        LAYOUT_PROPS_FILE_PATH,
        COMPONENT_PROPS_FILE_PATH,
        HELPERS_FILE_PATH,
        BREAKPOINTS_FILE_PATH,
      ].map((path) => loadSource(path));

      const context = {
        exports: {},
      };

      runInContext(sources[0], context);
      const { DESIGN_SYSTEM_SIZES } = context.exports;
      context.require = createMockRequire({
        '../spacings/sizes': { DESIGN_SYSTEM_SIZES },
      });

      for (const src of sources.slice(1)) {
        runInContext(src, context);
      }

      const missingExports = requiredExports.filter((key) => !context.exports[key]);

      if (missingExports.length) {
        throw new Error(`Required exports not found: ${missingExports.join(', ')}`);
      }

      const {
        LAYOUT_PROPS,
        COMPONENTS_PROPS,
        NEW_BREAKPOINTS,
        widthPlus,
        generateConstantClassName,
        generateVariableClassName,
        generateVariable,
      } = context.exports;

      const breakpointKeys = Object.keys(NEW_BREAKPOINTS);
      const medias = breakpointKeys.map((key) => {
        return new AtRule({
          name: 'media',
          params: widthPlus(NEW_BREAKPOINTS[key]),
        });
      });

      const addDeclaration = addDeclarationFactory(root);

      function addGapClasses(node, value, bp) {
        ['row', 'column'].forEach((dir) => {
          const cls = '.' + generateConstantClassName(`${dir}_gap`, value, bp);
          const prop = generateVariable(`${dir}_gap`);
          addDeclaration(node, cls, prop, `var(--vkui--spacing_size_${value})`);
        });
      }

      function addGapVariables(node, bp) {
        ['row', 'column'].forEach((dir) => {
          const cls = '.' + generateVariableClassName(`${dir}_gap`, bp);
          const prop = generateVariable(`${dir}_gap`);
          addDeclaration(node, cls, prop, `var(${generateVariable(`${dir}_gap`, bp)})`);
        });
      }

      const ALL_PROPS = { ...LAYOUT_PROPS, ...COMPONENTS_PROPS };

      [null, ...medias].forEach((media, index) => {
        const node = media ? media : root;
        const bp = media ? breakpointKeys[index - 1] : '';
        Object.entries(ALL_PROPS).forEach(([propName, rawPropDescriptor]) => {
          const cssProperty = propName.replace(/([A-Z])/g, '-$1').toLowerCase();
          const arrayOnlyProp = Array.isArray(rawPropDescriptor);

          const propDescriptor = {
            type: arrayOnlyProp ? 'dynamic' : rawPropDescriptor.type || 'dynamic',
            values: arrayOnlyProp ? rawPropDescriptor : rawPropDescriptor.values || [],
            class: rawPropDescriptor.class || cssProperty,
            propName: rawPropDescriptor.propName || cssProperty,
          };

          if (propName === 'noWrap') {
            addDeclaration(
              node,
              '.' + generateVariableClassName(propDescriptor.class, bp),
              propDescriptor.propName,
              'wrap',
            );
            return;
          }

          if (propName === 'gap') {
            propDescriptor.values.forEach((value) => addGapClasses(node, value, bp));
            addGapVariables(node, bp);
            return;
          }

          if (propDescriptor.values.length === 0 || propName === 'size') {
            addDeclaration(
              node,
              '.' + generateVariableClassName(propDescriptor.class, bp),
              generateVariable(propDescriptor.propName),
              `var(${generateVariable(propDescriptor.propName, bp)})`,
            );
          }

          // propDescriptor is not an array
          propDescriptor.values.forEach((value) => {
            const isFlexAlias =
              (propName === 'align' || propName === 'justify') &&
              (value === 'start' || value === 'end');
            const mappedValue = isFlexAlias ? `flex-${value}` : value;
            const className = `.${generateConstantClassName(propDescriptor.class, value, bp)}`;

            addDeclaration(
              node,
              className,
              propName === 'size'
                ? generateVariable(propDescriptor.propName)
                : propDescriptor.propName,
              DESIGN_SYSTEM_SIZES.includes(value)
                ? `var(--vkui--spacing_size_${value})`
                : mappedValue,
            );
          });

          if (propName === 'size') {
            return;
          }

          if (propDescriptor.type !== 'static' && propDescriptor.values.length !== 0) {
            addDeclaration(
              node,
              `.${generateVariableClassName(propDescriptor.class, bp)}`,
              propDescriptor.propName,
              `var(${generateVariable(propDescriptor.propName, bp)})`,
            );
          }
        });

        if (media) {
          root.append(media);
        }
      });
    },
  };
};

module.exports.postcss = true;
