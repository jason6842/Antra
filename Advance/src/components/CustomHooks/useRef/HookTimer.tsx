import { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleClear = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimer(0);

    intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
  };
  return (
    <div>
      Hook Timer - {timer}
      <button onClick={handleClear}>Clear Hook Timer</button>
    </div>
  );
}

export default HookTimer;
