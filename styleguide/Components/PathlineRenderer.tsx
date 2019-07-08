import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-styleguidist/lib/rsg-components/Link';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import pkg from '../../package.json';

const scheme = require('@vkontakte/appearance/main.valette/scheme');

const schemeOptions = Object.keys(scheme).map(scheme_id => (
  <option value={scheme_id} key={scheme_id}>
    {scheme_id}
  </option>
));

export const styles = ({ fontFamily, fontSize }) => ({
  pathline: {
    fontFamily: fontFamily.base,
    fontSize: fontSize.small
  },
  link: {
    marginTop: 4
  }
});

export function PathlineRenderer ({ classes, children }) {
  const { uaList, schemeId } = window as any; // FIXME

  return (
    <div className={classes.pathline}>
      <span>
        Платформа:&nbsp;
        <select
          onChange={e => {
            window.localStorage.setItem('vkui-styleguide:ua', e.target.value);
            window.location.reload();
          }}
          value={window.navigator.userAgent}
        >
          <option value={uaList.ios}>ios</option>
          <option value={uaList.android}>android</option>
        </select>
      </span>
      &nbsp;|&nbsp;
      <span>
        Тема:&nbsp;
        <select
          onChange={e => {
            window.localStorage.setItem('vkui-styleguide:schemeId', e.target.value);
            window.location.reload();
          }}
          value={schemeId}
        >
          {schemeOptions}
        </select>
      </span>
      &nbsp;|&nbsp;
      <span className={classes.link}>
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
  children: PropTypes.string
};

export default Styled(styles)(PathlineRenderer);
