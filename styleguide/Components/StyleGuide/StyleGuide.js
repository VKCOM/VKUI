import React, { Component } from 'react';
import TableOfContents from '../TableOfContents/TableOfContents';
import StyleGuideRenderer from './StyleGuideRenderer';
import Sections from '@rsg-components/Sections';
import Error from '@rsg-components/Error';
import NotFound from '@rsg-components/NotFound';
import Context from '@rsg-components/Context';

export default class StyleGuide extends Component {
  state = {
    error: false,
    info: null,
  };

  componentDidCatch(error, info) {
    this.setState({
      error,
      info,
    });
  }

  isRootUrl() {
    return window.location.hash === '';
  }

  render() {
    const { error, info } = this.state;
    const { config, sections, allSections, codeRevision, cssRevision, slots } = this.props;

    if (error && info) {
      return <Error error={error} info={info} />;
    }

    return (
      <Context.Provider
        value={{
          codeRevision,
          config,
          slots,
          cssRevision,
        }}
      >
        <StyleGuideRenderer
          key={cssRevision}
          title={config.title}
          version={config.version}
          toc={allSections ? <TableOfContents sections={allSections} /> : null}
        >
          {this.isRootUrl() && <Sections sections={[allSections[0]]} depth={1} />}
          {!this.isRootUrl() && sections.length === 1 && <Sections sections={sections} depth={1} />}
          {!this.isRootUrl() && !sections.length && <NotFound />}
        </StyleGuideRenderer>
      </Context.Provider>
    );
  }
}
