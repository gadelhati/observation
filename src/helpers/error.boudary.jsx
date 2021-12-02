import React from "react"

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        errorMessage: ""
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message };
    }
    componentDidCatch(error, errorInfo) {
        // logErrorToMyService(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <h1>Error: {this.state.errorMessage}. Contate: @GadelhaTI</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary