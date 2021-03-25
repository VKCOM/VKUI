import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from '@rsg-components/Link';
import pkg from '../../package.json';
import Styled from '@rsg-components/Styled';

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
  );
}

PathlineRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
};

export default Styled(styles)(PathlineRenderer);
