import React, { createContext, PureComponent } from 'react';

export type PanelScrolls = { [panelId: string]: number };

type Props = {};

type State = {
  scrolls: PanelScrolls;
};

type ScrollsContextType = { scrolls: PanelScrolls; setScroll?(payload: PanelScrolls): void };

export const ScrollsContext = createContext<ScrollsContextType>({
  scrolls: {},
});

export class ScrollsContextProvider extends PureComponent<Props, State> {
  state = { scrolls: {} };

  handleSetScroll = (payload: PanelScrolls): void => {
    this.setState({ scrolls: { ...this.state.scrolls, ...payload } });
  };

  render() {
    const { scrolls } = this.state;
    const { children } = this.props;

    return <ScrollsContext.Provider value={{ scrolls, setScroll: this.handleSetScroll }}>{children}</ScrollsContext.Provider>;
  }
}

export const ScrollsContextConsumer = ScrollsContext.Consumer;
