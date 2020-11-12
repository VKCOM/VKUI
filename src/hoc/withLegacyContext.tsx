import React from 'react';

export default function withLegacyContext<T>(Component: T, context: Record<string, any>, propName = 'legacyContext') {
  class WithLegacyContext extends React.Component {
    static contextTypes = context;

    render() {
      // @ts-ignore
      return <Component {...this.props} {...{ [propName]: this.context }} />;
    }
  }

  return WithLegacyContext as unknown as T;
}
