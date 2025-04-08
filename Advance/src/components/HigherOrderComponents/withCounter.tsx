import { useState } from "react";

// not what we want, we want the increment to be in all updated components
// const UpdatedComponent = (OriginalComponent: any) => {
//     const NewComponent = () => {
//         return <OriginalComponent name="Jason"/>
//     }

//     return NewComponent;
// }

const withCounter = (WrappedComponent: any, incrementNumber: any) => {
  const WithCounter = (props: any) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prev) => prev + incrementNumber);
    };
    return <WrappedComponent count={count} incrementCount={incrementCount} {...props}/>;
  };

  return WithCounter;
};

export default withCounter;
