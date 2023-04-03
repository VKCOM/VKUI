import React, { Fragment } from 'react';
import {
  Icon28ChevronDownOutline,
  Icon28ChevronUpOutline,
  Icon28WarningTriangleOutline,
} from '@vkontakte/icons';
import getInfoFromHash from 'react-styleguidist/lib/client/utils/getInfoFromHash';
import {
  Caption,
  classNames,
  Footer,
  Header,
  IconButton,
  Search,
  Separator,
  SimpleCell,
  useAdaptivityWithJSMediaQueries,
} from '@vkui';
import { unstable } from '../../unstable';
import { getDeprecatedFromComponentTags } from '../../utils';
import './TableOfContents.css';

function capitalize(string = '') {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

const redirects = {
  'section-начало-работы': 'About',
  'Начало работы': 'About',
  'section-установка': 'QuickStart',
  'Установка': 'QuickStart',
  'section-подготовка-html': 'QuickStart',
  'Подготовка html': 'QuickStart',
  'section-hello-world': 'QuickStart',
  'Hello World': 'QuickStart',
  'section-концепция': 'Concept',
  'Концепция': 'Concept',
  'section-структура-экранов': 'Structure',
  'Структура экранов': 'Structure',
  'section-режимы-подключения': 'Modes',
  'Режимы подключения': 'Modes',
  'section-helpers': 'Helpers',
  'section-server-side-rendering': 'SSR',
  'Server Side Rendering': 'SSR',
  'section-icons': 'Icons',
  'section-colors': 'PlatformsAndThemes',
  'section-themes': 'PlatformsAndThemes',
  'section-utils': 'Utils',
  'section-design': 'Design',
};

const normalizer = (sections) => {
  return sections.map(
    ({
      name,
      content,
      sections: childrenSections = [],
      href,
      components = [],
      expand = false,
      deprecated = false,
      ...restProps
    }) => {
      const children = normalizer([
        ...childrenSections,
        ...components.map((component) => {
          const { isDeprecated } = getDeprecatedFromComponentTags(component);

          return {
            name: component.name,
            title: component.title,
            href: component.href,
            content: component.filepath,
            deprecated: isDeprecated,
          };
        }),
      ]);

      return {
        name,
        content,
        sections: children,
        href: content && `#/${name}`,
        expand,
        deprecated,
        ...restProps,
      };
    },
  );
};

class TableOfContents extends React.PureComponent {
  constructor(props) {
    super(props);
    this.sections = normalizer(this.props.sections);

    if (!this.currentSection) {
      const redirectSection = this.resolveRedirectSection();

      if (redirectSection) {
        window.location.hash = redirectSection.href;
      }
    }

    this.state = {
      search: '',
      expand: this.search(this.sections, this.currentSection?.name, {
        exactMatch: true,
      }),
      currentSectionName: this.currentSection?.name,
    };
    this.searchResults = {};
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.hashChangeListener);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.hashChangeListener);
  }

  hashChangeListener = () => {
    this.setState({
      currentSectionName: this.currentSection?.name,
    });
  };

  get currentSection() {
    const { targetName } = getInfoFromHash(window.location.hash);
    return this.pickSection(targetName);
  }

  resolveRedirectSection = () => {
    let { targetName } = getInfoFromHash(window.location.hash);

    if (!targetName) {
      targetName = window.location.hash.replace('#', '');
    }

    targetName = decodeURIComponent(targetName);

    if (this.pickSection(targetName)) {
      return;
    }

    return redirects[targetName]
      ? this.pickSection(redirects[targetName])
      : this.pickSection(capitalize(targetName));
  };

  onExpandCellClick = (e) => {
    this.expand(e.currentTarget.dataset.sectionName);
  };

  onExpandIconClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.expand(e.currentTarget.dataset.sectionName);
  };

  expand(sectionName) {
    this.setState({
      expand: {
        ...this.state.expand,
        [sectionName]: !this.state.expand[sectionName],
      },
    });
  }

  pickSection = (sectionName = '', sections = this.sections) => {
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section.name === sectionName) {
        return section;
      } else if (section.sections.length > 0) {
        const childSearch = this.pickSection(sectionName, section.sections);
        if (childSearch) {
          return childSearch;
        }
      }
    }
  };

  onSearchChange = (e) => {
    const value = e.currentTarget.value;

    if (value.length === 0) {
      this.searchResults = {};
    } else {
      const section = this.pickSection(e.currentTarget.dataset.sectionName);
      this.searchResults = {
        ...this.searcResults,
        ...this.search(section.sections, e.currentTarget.value),
      };
    }
    this.setState({ search: e.currentTarget.value });
  };

  search(sections, query = '', { exactMatch = false } = {}) {
    let result = {};
    sections.forEach((section) => {
      let found = exactMatch
        ? section.name.toLowerCase() === query.toLowerCase()
        : section.name.toLowerCase().includes(query.toLowerCase());
      if (section.sections.length > 0) {
        const childSearch = this.search(section.sections, query, {
          exactMatch,
        });
        result = { ...result, ...childSearch };
        if (Object.values(childSearch).filter(Boolean).length > 0) {
          found = true;
        }
      }
      result[section.name] = found;
    });
    return result;
  }

  renderSections(sections) {
    return sections.map((section) => {
      if (
        this.searchResults.hasOwnProperty(section.name) &&
        this.searchResults[section.name] === false
      ) {
        return null;
      }

      const expanded =
        section.expand || this.state.expand[section.name] || this.searchResults[section.name];

      return (
        <Fragment key={section.name}>
          {section.sections.length > 0 && !section.content && section.expand ? (
            <Fragment>
              <Separator className="TableOfContents__separator" />
              <Header mode="secondary">{section.title || section.name}</Header>
            </Fragment>
          ) : (
            <SimpleCell
              href={section.href}
              after={
                (section.sections.length > 0 && (
                  <IconButton onClick={this.onExpandIconClick} data-section-name={section.name}>
                    {expanded ? (
                      <Icon28ChevronUpOutline fill="var(--vkui--color_text_tertiary)" />
                    ) : (
                      <Icon28ChevronDownOutline fill="var(--vkui--color_text_tertiary)" />
                    )}
                  </IconButton>
                )) ||
                (unstable.includes(section.name) && (
                  <Icon28WarningTriangleOutline
                    fill="var(--vkui--color_accent_orange)"
                    title="Компонент является нестабильным"
                  />
                ))
              }
              onClick={!section.href ? this.onExpandCellClick : undefined}
              data-section-name={section.name}
              className={classNames('TableOfContents__section', {
                'TableOfContents__section--selected':
                  section.name === this.state.currentSectionName,
              })}
              indicator={section.deprecated && <Caption level="2">deprecated</Caption>}
            >
              {section.title || section.name}
            </SimpleCell>
          )}
          {section.search && (
            <Search
              onChange={this.onSearchChange}
              data-section-name={section.name}
              className="TableOfContents__search"
            />
          )}
          {section.sections.length > 0 && (
            <div
              className={classNames('TableOfContents__list', {
                'TableOfContents__list--expanded': expanded,
              })}
            >
              {this.renderSections(section.sections)}
              <Footer className="TableOfContents__nothingFound">Ничего не найдено</Footer>
            </div>
          )}
        </Fragment>
      );
    });
  }

  render() {
    const { sizeX } = this.props;
    return (
      <div
        className={classNames(
          'TableOfContents',
          sizeX === 'none' ? 'TableOfContents--sizeX-none' : `TableOfContents--sizeX-${sizeX}`,
        )}
      >
        {this.renderSections(this.sections)}
      </div>
    );
  }
}

export default (props) => {
  // FIXME Не SSR ready.
  const { sizeX } = useAdaptivityWithJSMediaQueries();

  return <TableOfContents {...props} sizeX={sizeX} />;
};
