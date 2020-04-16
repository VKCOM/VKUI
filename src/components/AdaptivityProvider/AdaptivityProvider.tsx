import React from 'react';
import { HasChildren } from '../../types';
import { AdaptivityContext, AdaptivityContextInterface, SizeType, ViewMode } from './AdaptivityContext';
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

  renderInner = ({ viewWidth }: { viewWidth: number }) => {
    let viewMode = ViewMode.SMALL_MOBILE;
    let sizeY = SizeType.REGULAR;
    let sizeX = SizeType.REGULAR;

    if (viewWidth >= DESKTOP_SIZE) {
      viewMode = ViewMode.DESKTOP;
    } else if (viewWidth >= TABLET_SIZE) {
      viewMode = ViewMode.TABLET;
    } else if (viewWidth >= SMALL_TABLET_SIZE) {
      viewMode = ViewMode.SMALL_TABLET;
    } else if (viewWidth >= MOBILE_SIZE) {
      viewMode = ViewMode.MOBILE;
      sizeX = SizeType.COMPACT;
    } else {
      viewMode = ViewMode.SMALL_MOBILE;
      sizeX = SizeType.COMPACT;
      sizeY = SizeType.COMPACT;
    }

    return <AdaptivityContext.Provider value={{ sizeX, sizeY, viewMode }}>
      {this.props.children}
    </AdaptivityContext.Provider>;
  };

  render() {
    return <Responsive match={{
      viewWidth: (width: number) => {
        return width;
      },
    }}>
      {this.renderInner}
    </Responsive>;
    ;
  }
}
