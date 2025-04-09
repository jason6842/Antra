import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // when page reloads, cursor will automatically be on input
    // focus the input element
    if (inputRef.current) {
        inputRef.current.focus();
    }


  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
