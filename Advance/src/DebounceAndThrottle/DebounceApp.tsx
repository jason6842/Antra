import React, { useState } from "react";
import useDebounce from "./useDebounce";
function DebounceApp() {
  const [inputVal, setInputVal] = useState("");

  const handleAlert = (value: string) => {
    alert(`Input value: ${value}`);
  };

  // without useCallback or useRef, a new debounceFn gets created each time the component re-renders
  //   const debounceFn = useCallback(debounce(handleAlert, 1000), []);
  const debounceFn = useDebounce(handleAlert, 1000);

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
          debounceFn(e.currentTarget.value)
        }
      />
      <p>{inputVal}</p>
    </div>
  );
}

export default DebounceApp;
