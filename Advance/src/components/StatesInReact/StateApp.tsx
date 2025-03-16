import { use, useState } from "react";

function StateApp() {
  // let age = 0;

  // const increaseAge = () => {
  //     age = age + 1;
  //     // document.getElementById() in vanilla javascript
  //     console.log(age);
  // }

  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: any) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("blue");

  const [nameText, setNameText] = useState(true);
  const [nameColor, setNameColor] = useState("black");

  const changeColorName = () => {
    setNameText(!nameText);
    setNameColor(nameColor === "black" ? "red" : "black");
  }
  return (
    <>
      <div className="App">
        {age}
        <button onClick={increaseAge}>Increase Age</button>
        <input type="text" onChange={handleInputChange} />
        <br />
        Input: {inputValue}
      </div>
      <button onClick={() => {setShowText(!showText)}}>Show/Hide</button>
      {showText && <h1>HI MY NAME IS JASON</h1>}
      <button onClick={() => {setTextColor(textColor === "blue" ? "green" : "blue")}}>Blue/Green</button>
      <h1 style={{color: textColor}}>COLOR</h1>
      <button onClick={changeColorName}>Toggle Visibility and Color</button>
      {nameText && <h1 style={{color: nameColor}}>Jason</h1>}
    </>
  );
}

export default StateApp;
