import * as React from 'react';
import {
  type ObservableProps,
  useObserverProps,
  useRunActionProps,
} from '../../lib/react/observable';
import { useSplitCol } from '../SplitCol/SplitColContext';
import {
  type SplitLayoutContextType,
  useSplitLayoutContext,
} from '../SplitLayout/SplitLayoutContext';
import { PanelHeaderHost } from './components/PanelHeaderHost/PanelHeaderHost';
import { PanelHeaderIn } from './components/PanelHeaderIn/PanelHeaderIn';
import type { PanelHeaderProps } from './types';

const PanelHeaderProxy = ({
  prevProps,
  nextProps,
}: Record<'prevProps' | 'nextProps', PanelHeaderProps>) => {
  useRunActionProps(nextProps, prevProps);
  return null;
};

const PanelHeaderSlot = ({
  observableProps,
}: {
  observableProps: ObservableProps<PanelHeaderProps>;
}) => {
  return <PanelHeaderIn {...useObserverProps(observableProps)} />;
};

const PanelHeaderSlots = ({
  cols,
  headers,
  props,
}: SplitLayoutContextType<never> & { props: PanelHeaderProps }) => {
  useObserverProps(cols);
  return (
    <PanelHeaderHost {...props}>
      {Object.entries(headers).map(([key, observableProps]) => (
        <PanelHeaderSlot key={key} observableProps={observableProps} />
      ))}
    </PanelHeaderHost>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeader
 */
export const PanelHeader = ({
  float = false,
  transparent = false,
  delimiter = 'auto',
  ...restProps
}: PanelHeaderProps) => {
  const props = { float, transparent, delimiter, ...restProps };
  const splitColContext = useSplitCol();
  const splitLayoutContext = useSplitLayoutContext();

  if (splitLayoutContext.cols !== null) {
    if (splitColContext.id !== null) {
      const prevProps = splitLayoutContext.headers[splitColContext.id];
      props.style = splitColContext.style;
      return <PanelHeaderProxy prevProps={prevProps} nextProps={props} />;
    }

    return (
      <PanelHeaderSlots
        cols={splitLayoutContext.cols}
        headers={splitLayoutContext.headers}
        props={props}
      />
    );
  }

  const { before, after, typographyProps, children, ...rest } = props;
  return (
    <PanelHeaderHost {...rest}>
      <PanelHeaderIn before={before} after={after} typographyProps={typographyProps}>
        {children}
      </PanelHeaderIn>
    </PanelHeaderHost>
  );
};
