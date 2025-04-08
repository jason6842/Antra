import withError from './withError'

function ComponentB() {
    console.log(person);
    const person = {
        name: "test",
        age: 20,
    }
  return (
    <div>{person}</div>
    // <div>Name: {person.name.fullName.firstName}</div>
    // <div>Name: {person.name}</div>
  )
}

export default withError(ComponentB, (errorMsg: string) => <div style={{backgroundColor:"green"}}>{errorMsg}</div>);