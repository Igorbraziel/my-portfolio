import { Component, type ErrorInfo, type ReactNode } from "react";
import ErrorFallback from "./ErrorFallback";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught error:", error);
    console.error("Error info:", info)
  }

  render() {
    if (this.state.hasError) {
      if(this.props.fallback){
        return this.props.fallback;
      }
      return <ErrorFallback error={this.state.error} resetErrorBoundary={() => window.location.replace("/")}/>
    }

    return this.props.children;
  }
}
