// Copied from https://www.developerway.com/posts/how-to-handle-errors-in-react
import React from "react";
import GenericErrorPage from "../pages/GenericErrorPage";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // initialize the error state
    this.state = { hasError: false };
  }

  // if an error happened, set the state to true
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    // if error happened, return a fallback component
    if (this.state.hasError) {
      return <GenericErrorPage />;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
