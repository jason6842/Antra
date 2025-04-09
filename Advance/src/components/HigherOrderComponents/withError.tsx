import React from "react";

function withError(WrappedComponent: React.ComponentType, renderError: any) {
    return class NewComponent extends React.Component<{}, { hasError: boolean; errorMessage: string }> {
        constructor(props: any) {
            super(props);
            this.state = { hasError: false, errorMessage: "" };
        }

        componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
            console.log(error.message);
            console.log(errorInfo);
            this.setState({ hasError: true, errorMessage: error.message});
        }

        render() {
            if (this.state.hasError ) {
                return renderError(this.state.errorMessage);
                return <p>Error: {this.state.errorMessage}</p>;
            }
            return <WrappedComponent {...this.props} />
        }
    }
}

export default withError
// type WithErrorParams = {
//     renderError: (errMsg: string) => React.ReactNode,
//     componentName: string,
//     logErrorToMyService: (err: Error) => void
// }
// function withError({renderError, componentName, logErrorToMyService}: WithErrorParams) {
//     // return a function that takes in a component to return a HOC
//   return function (WrappedComponent: React.ComponentType) {
//     // Props = {}, State = { hasError: boolean, errorMessage: string }
//     return class NewComponent extends React.Component<{}, { hasError: boolean; errorMessage: string }> {
//       constructor(props: any) {
//         super(props);
//         this.state = { hasError: false, errorMessage: "" };
//       }

//       componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
//         console.log(error.message);
//         console.log(errorInfo);
//         this.setState({ hasError: true, errorMessage: error.message });
//       }

//       render() {
//         if (this.state.hasError) {
//           return renderError(this.state.errorMessage);
//           return <p>Error: {this.state.errorMessage}</p>;
//         }
//         return <WrappedComponent {...this.props} />;
//       }
//     };
//   };
// }

// export default withError;
