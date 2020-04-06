import React, { useContext } from 'react';
import { AdaptivityContext, SizeType } from '../components/AdaptivityProvider/AdaptivityContext';

export default function withAdaptivity<T>(TargetComponent: T): T {
  function AdaptivityConsumer(props: AdaptivityProps) {
    const context = useContext(AdaptivityContext);
    let update = false;

    if (props.sizeX || props.sizeY) {
      update = true;
    }

    const sizeX = props.sizeX || context.sizeX;
    const sizeY = props.sizeY || context.sizeY;

    // @ts-ignore
    const target = <TargetComponent {...props} sizeX={sizeX} sizeY={sizeY} isMobile={context.isMobile} />;

    if (update) {
      return <AdaptivityContext.Provider value={{ sizeX, sizeY, isMobile: context.isMobile }}>
        {target}
      </AdaptivityContext.Provider>;
    }

    return target;
  }

  return AdaptivityConsumer as unknown as T;
}

export interface AdaptivityProps {
  sizeX?: SizeType;
  sizeY?: SizeType;
  isMobile?: boolean;
}

/* const withAdaptivity = <P extends AdaptivityProps>(TargetComponent: React.ComponentType<P>) => {
  // const { sizeX, sizeY } = useContext(AdaptivityContext);

  return class AdaptivityConsumer extends React.Component<P> {
    static context = AdaptivityContext;

    public componentDidMount() {

    }

    public componentWillUnmount() {

    }

    public render() {
      let update = false;

      if (this.props.sizeX || this.props.sizeY) {
        update = true;
      }

      const sizeX = this.props.sizeX || this.context.sizeX;
      const sizeY = this.props.sizeY || this.context.sizeY;

      const target = <TargetComponent {...this.props} sizeX={sizeX} sizeY={sizeY} />;

      if (update) {
        return <AdaptivityContext.Provider value={{ sizeX, sizeY }}>
          {target}
        </AdaptivityContext.Provider>
      }

      return target;
    }
  };
};*/

// export default withAdaptivity;
