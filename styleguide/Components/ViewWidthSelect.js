import React, { Fragment } from 'react';
import {
  DESKTOP_SIZE,
  MOBILE_SIZE,
  SMALL_TABLET_SIZE,
  TABLET_SIZE,
} from '../../src/components/AdaptivityProvider/AdaptivityProvider';

export const ViewWidthSelect = ({ onChange, value, isWide, isVKCOM }) => (
  <Fragment>
    Ширина окна:&nbsp;
    <select
      onChange={onChange}
      value={value}
    >
      {!isVKCOM && <option value={MOBILE_SIZE}>{MOBILE_SIZE}px</option>}
      {!isVKCOM && <option value={SMALL_TABLET_SIZE}>{SMALL_TABLET_SIZE}px</option>}
      <option value={TABLET_SIZE}>{TABLET_SIZE}px</option>
      {isWide && <option value={DESKTOP_SIZE}>{DESKTOP_SIZE}px</option>}
    </select>
  </Fragment>
)
