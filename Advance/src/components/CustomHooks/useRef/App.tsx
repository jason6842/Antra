import React, { useEffect, useRef, useState } from 'react'
import FocusInput from './FocusInput';
import ClassTimer from './ClassTimer';
import HookTimer from './HookTimer';

// 1. useState() causes re-render.
// 2. useRef() DOESN'T cause re-render.
// 3. useEffect() runs AFTER render.

function UseRefApp() {
    const [name, setName] = useState('');
    // const [renderCount, setRenderCount] = useState(0);
    // very similar to useState but doesn't cause it to re-render
    const renderCount = useRef(1);
    // { current: 0}
    const inputRef = useRef<HTMLInputElement>(null);

    function focus() {
        console.log(inputRef.current);
        if (inputRef.current) {
            // focus gets put into the input tag
            inputRef.current.focus();
        }
    }

    // useEffect(() => {
    //     // setRenderCount(prevRenderCount => prevRenderCount + 1);  
    //     renderCount.current = renderCount.current + 1 
    // });
    const prevName = useRef('');
    useEffect(() => {
        prevName.current = name
    }, [name])
  return (
    <>
        {/* this sets focus tot his input field */}
        {/* <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} /> */}
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>My name is {name} and it used to be {prevName.current}</div>
        <div>I rendered {renderCount.current} times</div>
        <button onClick={focus}>Focus</button>
        <FocusInput />
        <ClassTimer />
        <HookTimer />
    </>
  )
}

export default UseRefApp