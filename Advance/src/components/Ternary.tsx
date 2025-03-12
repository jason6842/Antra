export default function Ternary () {
    const age = 15;
    // if (age >= 18) {
    //     return <h1>OVER AGE</h1>
    // } {
    //     return <h1>IS UNDER AGE</h1>
    // }
    const isGreen = true;
    return (
        <div>
            {age >= 18 ? <h1>OVER AGE</h1> : <h1>IS UNDER AGE</h1>}
            {isGreen ? <h1>IS green</h1> : <h1> not green</h1>}
            <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS COLOR</h1>

            { isGreen && <button> THIS IS A BUTTON</button>}
        </div>
    );
}