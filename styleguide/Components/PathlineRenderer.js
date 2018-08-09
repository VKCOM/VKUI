import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-styleguidist/lib/rsg-components/Link';
import pkg from '../../package.json';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';

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
      <div>
        Платформа:&nbsp;
        <select onChange={ (e) => {
          window.localStorage.setItem('vkui-styleguide:ua', e.target.value);
          window.location.reload();
        } } value={window.navigator.userAgent}>
          <option value={window.uaList.ios}>ios</option>
          <option value={window.uaList.android}>android</option>
        </select>
      </div>
      <div className={classes.link}>
        Исходники:&nbsp;
        <Link target="_blank" href={`${pkg.repository}/tree/v${pkg.version}/${children.replace('../', '')}`}>
          Github
        </Link>
      </div>
    </div>
  );
}

PathlineRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
};

export default Styled(styles)(PathlineRenderer);
