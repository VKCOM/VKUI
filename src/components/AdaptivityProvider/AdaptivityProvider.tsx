import React from 'react';
import { HasChildren } from '../../types';
import { AdaptivityContext, AdaptivityContextInterface, SizeType } from './AdaptivityContext';
import Responsive from '../Responsive/Responsive';

export interface AdaptivityProviderProps extends AdaptivityContextInterface, HasChildren {};

export default class AdaptivityProvider extends React.Component<AdaptivityProviderProps> {
  static defaultProps: AdaptivityProviderProps = {
    sizeX: SizeType.REGULAR,
    sizeY: SizeType.REGULAR,
  };

  renderInner = ({ isMobile }: { isMobile: boolean }) => {
    const sizeX = isMobile ? SizeType.COMPACT : SizeType.REGULAR;
    const sizeY = this.props.sizeY;

    return <AdaptivityContext.Provider value={{ sizeX, sizeY, isMobile }}>
      {this.props.children}
    </AdaptivityContext.Provider>;
  };

  render() {
    return <Responsive match={{
      isMobile: (width: number) => width < 760,
    }}>
      {this.renderInner}
    </Responsive>;
    ;
  }
}
