import React, { Fragment } from 'react'
import { Header, IconButton, SimpleCell, Group, Search, classNames, Separator, Headline, Footer } from '@vkui';
import { Icon28ChevronDownOutline, Icon28ChevronUpOutline } from '@vkontakte/icons';
import './TableOfContents.css';

const normalizer = (sections) => {
  return sections.map(({ name, content, sections = [], components = [], expand = false, search }) => {
    const children = normalizer([...sections, ...components.map((component) => {
      return {
        name: component.name,
        href: component.href,
        content: component.filepath,
      }
    })]);

    return {
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
      expand: {},
    }
    this.sections = normalizer(this.props.sections);
    this.searchResults = {}
  }

  onExpandCellClick = (e) => {
    if (!e.currentTarget.href) {
      this.expand(e.currentTarget.dataset.sectionName)
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
        return section
      } else if (section.sections.length > 0) {
        return this.pickSection(sectionName, section.sections);
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

  search(sections, query) {
    let result: Record<string, boolean> = {};
    sections.forEach((section) => {
      let found = section.name.toLowerCase().includes(query.toLowerCase());
      if (section.sections.length > 0) {
        const childSearch = this.search(section.sections, query);
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
              <Header mode="secondary">{section.name}</Header>
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
            >
              {section.name}
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
