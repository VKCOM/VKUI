import * as React from 'react';

interface ErrorBoundaryProps {
  version: any;
  error: Error | null;
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  public override state = { error: null };

  public override componentDidUpdate(prevProps: Readonly<ErrorBoundaryProps>) {
    if (prevProps.version !== this.props.version && this.state.error) {
      this.setState({ error: null });
    }
  }

  public constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  public static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  public override render() {
    const error = this.state.error || this.props.error;

    if (error) {
      return <pre>{String(error)}</pre>;
    }

    return this.props.children;
  }
}
