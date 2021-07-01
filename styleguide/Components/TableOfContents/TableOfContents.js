import React, { Fragment } from 'react'
import { Header, IconButton, SimpleCell, Group, Search, classNames, Separator, Footer } from '@vkui';
import { Icon28ChevronDownOutline, Icon28ChevronUpOutline } from '@vkontakte/icons';
import './TableOfContents.css';
import getInfoFromHash from 'react-styleguidist/lib/client/utils/getInfoFromHash';

const normalizer = (sections) => {
  return sections.map(({ name, title, content, sections = [], components = [], expand = false, search }) => {
    const children = normalizer([...sections, ...components.map((component) => {
      return {
        name: component.name,
        title: component.title,
        href: component.href,
        content: component.filepath,
      }
    })]);

    return {
      title,
      name,
      content,
      href: content && `#/${name}`,
      expand,
      search,
      sections: children
    }
  });
}

class TableOfContents extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
    this.sections = normalizer(this.props.sections);
    this.searchResults = {};
    const { targetName } = getInfoFromHash(window.location.hash);
    if (targetName) {
      const currentSection = this.pickSection(targetName);
      this.state.expand = currentSection ? this.search(this.sections, currentSection.name, { exactMatch: true }) : {};
      this.state.currentSectionName = currentSection && currentSection.name;
    }
  }

  onExpandCellClick = (e) => {
    const sectionName = e.currentTarget.dataset.sectionName;
    if (!e.currentTarget.href) {
      this.expand(sectionName)
    } else {
      this.setState({
        currentSectionName: sectionName
      })
    }
  }

  onExpandIconClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.expand(e.currentTarget.dataset.sectionName)
  }

  expand(sectionName) {
    this.setState({
      expand: {
        ...this.state.expand,
        [sectionName]: !this.state.expand[sectionName]
      }
    })
  }

  pickSection = (sectionName, sections = this.sections) => {
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section.name === sectionName) {
        return section;
      } else if (section.sections.length > 0) {
        const childSearch = this.pickSection(sectionName, section.sections)
        if (childSearch) {
          return childSearch;
        }
      }
    }
  }

  onSearchChange = (e) => {
    const value = e.currentTarget.value;

    if (value.length === 0) {
      this.searchResults = {}
    } else {
      const section = this.pickSection(e.currentTarget.dataset.sectionName);
      this.searchResults = {
        ...this.searcResults,
        ...this.search(section.sections, e.currentTarget.value)
      };
    }
    this.setState({ search: e.currentTarget.value })
  }

  search(sections, query, { exactMatch = false } = {}) {
    let result = {};
    sections.forEach((section) => {
      let found = exactMatch ? section.name.toLowerCase() === query.toLowerCase() : section.name.toLowerCase().includes(query.toLowerCase());
      if (section.sections.length > 0) {
        const childSearch = this.search(section.sections, query, { exactMatch });
        result = { ...result, ...childSearch };
        if (Object.values(childSearch).filter(Boolean).length > 0) {
          found = true;
        }
      }
      result[section.name] = found;
    })
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

      const expanded = section.expand || this.state.expand[section.name] || this.searchResults[section.name];

      return (
        <Fragment key={section.name}>
          {section.sections.length > 0 && !section.content && section.expand ?
            <Fragment>
              <Separator className="TableOfContents__separator" />
              <Header mode="secondary">{section.title || section.name}</Header>
            </Fragment> :
            <SimpleCell
              href={section.href}
              after={section.sections.length > 0 &&
                <IconButton onClick={this.onExpandIconClick} data-section-name={section.name}>
                  {expanded ? <Icon28ChevronUpOutline fill="var(--text_tertiary)" /> : <Icon28ChevronDownOutline fill="var(--text_tertiary)" />}
                </IconButton>
              }
              onClick={this.onExpandCellClick}
              data-section-name={section.name}
              className={classNames({
                'TableOfContents__section--selected': section.name === this.state.currentSectionName,
              })}
            >
              {section.title || section.name}
            </SimpleCell>
          }
          {section.search && <Search onChange={this.onSearchChange} data-section-name={section.name} className="TableOfContents__search" />}
          {section.sections.length > 0 &&
            <div className={classNames('TableOfContents__list', { 'TableOfContents__list--expanded': expanded })}>
              {this.renderSections(section.sections)}
              <Footer className="TableOfContents__nothingFound">Ничего не найдено</Footer>
            </div>
          }
        </Fragment>
      )
    })
  }

  render() {
    return <div className="TableOfContents">
      {this.renderSections(this.sections)}
    </div>;
  }
}

export default TableOfContents
