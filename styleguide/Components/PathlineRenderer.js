import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-styleguidist/lib/rsg-components/Link';
import pkg from '../../package.json';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import { CLIENT_LIGHT, CLIENT_DARK } from '../../src/appearance/constants';

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
    <div className={classes.pathline}>
      <span>
        Платформа:&nbsp;
        <select onChange={ (e) => {
          window.localStorage.setItem('vkui-styleguide:ua', e.target.value);
          window.location.reload();
        } } value={window.navigator.userAgent}>
          <option value={window.uaList.ios}>ios</option>
          <option value={window.uaList.android}>android</option>
        </select>
      </span>&nbsp;|&nbsp;<span>
        Тема:&nbsp;
        <select onChange={ (e) => {
          window.localStorage.setItem('vkui-styleguide:schemeId', e.target.value);
          window.location.reload();
        } } value={window.schemeId}>
          <option value={CLIENT_LIGHT} key={CLIENT_LIGHT}>{CLIENT_LIGHT}</option>
          <option value={CLIENT_DARK} key={CLIENT_DARK}>{CLIENT_DARK}</option>
        </select>
      </span>&nbsp;|&nbsp;<span className={classes.link}>
        Исходники:&nbsp;
        <Link target="_blank" href={`${pkg.repository}/tree/v${pkg.version}/${children.replace('../', '')}`}>
          GitHub
        </Link>
      </span>
    </div>
  );
}

PathlineRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
};

export default Styled(styles)(PathlineRenderer);
