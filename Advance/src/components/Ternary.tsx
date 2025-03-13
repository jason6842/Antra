export default function Ternary() {
  const age = 15;
  // if (age >= 18) {
  //     return <h1>OVER AGE</h1>
  //  }
  //  return <h1>IS UNDER AGE</h1>
  const isPacked = false;
  const name = "clothes";

  const isGreen = true;
  const messageCount = 4;
  return (
    <div>
        {age >= 18 ? <h1>OVER AGE</h1> : <h1>IS UNDER AGE</h1>}
        {isGreen ? <h1>IS green</h1> : <h1> not green</h1>}
        <h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h1>
        <li className="item">{isPacked ? name + " ✅" : name}</li>

        {/* if isGreen is true then show this button  */}
        {/* MUST BE BOOLEAN, NOT 0 OR 1 */}
        {isGreen && <button> THIS IS A BUTTON</button>}
        { messageCount > 0 && <h1>You have sent {messageCount} messages.</h1>}



        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
    </div>
  );
}

// wrapping with element tags use ()
function Item({ name, isPacked }: any) {
  return (
    <li className="item">
        {isPacked ? (
            <del>
                {name + " ✅"}
            </del> 
            ) : (
        name
        )}
    </li>
  );
}
