import withError from './withError'

function ComponentA() {
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

export default withError(ComponentA, (errorMsg: string) => <div style={{backgroundColor:"red"}}>{errorMsg}</div>);