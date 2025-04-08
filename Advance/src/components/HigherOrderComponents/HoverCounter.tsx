// import { useState } from 'react'
import withCounter from './withCounter';

function HoverCounter({count, incrementCount}: any) {
    // const [count, setCount] = useState(0);

    // const incrementCount = () => {
    //     setCount(prev => prev + 1);
    // }
  return (
    <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    </div>
  )
}

// export default HoverCounter
export default withCounter(HoverCounter, 10);