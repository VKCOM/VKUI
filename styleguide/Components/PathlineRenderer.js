import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-styleguidist/lib/rsg-components/Link';
import pkg from '../../package.json';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';

export const styles = ({ fontFamily }) => ({

  link: {
    fontFamily: fontFamily.base
  }
});

export function PathlineRenderer({ classes, children }) {
  return (
    <div className={classes.link}>
      <Link target="_blank" href={`${pkg.repository}/tree/v${pkg.version}/${children.replace('../', '')}`}>
        Sources
      </Link>
    </div>
  );
}

PathlineRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
};

export default Styled(styles)(PathlineRenderer);
