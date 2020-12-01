import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-styleguidist/lib/client/rsg-components/Link';
import pkg from '../../package.json';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';
import { StyleGuideContext } from './StyleGuideRenderer';
import { PlatformSelect } from './PlatformSelect';
import { SchemeSelect } from './SchemeSelect';
import { WebviewTypeSelect } from './WebviewTypeSelect';
import { ViewWidthSelect } from './ViewWidthSelect';
import { ViewHeightSelect } from './ViewHeightSelect';
import { HasMouseCheckbox } from './HasMouseCheckbox';
import { VKCOM } from '../../src/lib/platform';

export const styles = ({ fontFamily, fontSize }) => ({
  pathline: {
    fontFamily: fontFamily.base,
    fontSize: fontSize.small
  },
  link: {
    marginTop: 4
  }
});

export function PathlineRenderer({ classes, children }) {
  return (
    <StyleGuideContext.Consumer>
      {(styleGuideContext) => {
        return (
          <div className={classes.pathline}>
            <PlatformSelect
              onChange={(e) => styleGuideContext.setContext({ platform: e.target.value })}
              value={styleGuideContext.platform}
            />
            &nbsp;|&nbsp;
            <SchemeSelect
              onChange={(e) => styleGuideContext.setContext({ scheme: e.target.value })}
              value={styleGuideContext.scheme}
              disabled={styleGuideContext.platform === VKCOM}
            />
            &nbsp;|&nbsp;
            <WebviewTypeSelect
              onChange={(e) => styleGuideContext.setContext({ webviewType: e.target.value })}
              value={styleGuideContext.webviewType}
            />
            &nbsp;|&nbsp;
            <ViewWidthSelect
              onChange={(e) => styleGuideContext.setContext({ width: Number(e.target.value) })}
              value={styleGuideContext.width}
              isWide={!styleGuideContext.hasSidebar}
              isVKCOM={styleGuideContext.platform === VKCOM}
            />
            &nbsp;|&nbsp;
            <ViewHeightSelect
              onChange={(e) => styleGuideContext.setContext({ height: Number(e.target.value) })}
              value={styleGuideContext.height}
            />
            &nbsp;|&nbsp;
            <HasMouseCheckbox 
              onChange={(e) => styleGuideContext.setContext({ hasMouse: e.target.checked })}
              value={styleGuideContext.hasMouse}
              disabled={styleGuideContext.platform === VKCOM}
            />
            &nbsp;|&nbsp;
            <span className={classes.link}>
              Исходники:&nbsp;
                <Link
                  target="_blank"
                  href={`${pkg.repository}/tree/v${pkg.version}/${children.replace('../', '')}`}
                >
                  GitHub
                </Link>
            </span>
          </div>
        )
      }}
    </StyleGuideContext.Consumer>
  );
}

PathlineRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
};

export default Styled(styles)(PathlineRenderer);
