// import { useState } from "react";
import withCounter from "./WithCounter";

function ClickCounter({count, incrementCount, name}: any) {
//   const [count, setCount] = useState(0);
//   const incrementCount = () => {
//     setCount(prev => prev + 1);
//   }
  return <button onClick={incrementCount}>{name} Clicked {count} times</button>;
}

// export default ClickCounter;
export default withCounter(ClickCounter, 5);
