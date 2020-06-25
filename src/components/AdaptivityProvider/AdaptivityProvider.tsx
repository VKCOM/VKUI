import React from 'react';
import { HasChildren } from '../../types';
import { AdaptivityContext, AdaptivityContextInterface, SizeType, ViewWidth } from './AdaptivityContext';
import Responsive from '../Responsive/Responsive';

export interface AdaptivityProviderProps extends AdaptivityContextInterface, HasChildren {};

const DESKTOP_SIZE = 1280;
const TABLET_SIZE = 1024;
const SMALL_TABLET_SIZE = 768;
const MOBILE_SIZE = 320;

export default class AdaptivityProvider extends React.Component<AdaptivityProviderProps> {
  static defaultProps: AdaptivityProviderProps = {
    sizeX: SizeType.REGULAR,
    sizeY: SizeType.REGULAR,
  };

  renderInner = ({ windowWidth }: { windowWidth: number }) => {
    let viewWidth = ViewWidth.SMALL_MOBILE;
    let sizeY = SizeType.REGULAR;
    let sizeX = SizeType.REGULAR;

    if (windowWidth >= DESKTOP_SIZE) {
      viewWidth = ViewWidth.DESKTOP;
    } else if (windowWidth >= TABLET_SIZE) {
      viewWidth = ViewWidth.TABLET;
    } else if (windowWidth >= SMALL_TABLET_SIZE) {
      viewWidth = ViewWidth.SMALL_TABLET;
    } else if (windowWidth >= MOBILE_SIZE) {
      viewWidth = ViewWidth.MOBILE;
      sizeX = SizeType.COMPACT;
    } else {
      viewWidth = ViewWidth.SMALL_MOBILE;
      sizeX = SizeType.COMPACT;
      sizeY = SizeType.COMPACT;
    }

    return <AdaptivityContext.Provider value={{ sizeX, sizeY, viewWidth }}>
      {this.props.children}
    </AdaptivityContext.Provider>;
  };

  render() {
    return <Responsive match={{
      windowWidth: (width: number) => {
        return width;
      },
    }}>
      {this.renderInner}
    </Responsive>;
    ;
  }
}
