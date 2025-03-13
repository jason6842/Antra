// Pure Function
// 1. It minds it own business. A function that does not change an objects or variables that existed 
//    before it was called
// 2. Same inputs, same outputs. Given the same inputs, pure function should always return the same result.
// NO SIDE EFFECTS

// Pure functions does not mutate variables outside of the function's scope or objects that were 
// created before the call, which makes it IMPURE

// Local Mutation
// Change variables and objects inside the scope of function while rendering is completely fine

function Recipe({ drinkers }: any ) {
    return (
      <ol>    
        <li>Boil {drinkers} cups of water.</li>
        <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
        <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
      </ol>
    );
  }
  
  export default function Pure() {
    return (
      <section>
        <h1>Spiced Chai Recipe</h1>
        <h2>For two</h2>
        <Recipe drinkers={2} />
        <h2>For a gathering</h2>
        <Recipe drinkers={4} />
      </section>
    );
  }

