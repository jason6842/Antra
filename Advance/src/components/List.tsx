import { Fragment } from 'react';

function List() {

    const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"];

    const users = [
        { name: "Pedro", age: 21 },
        { name: "Jake", age: 25},
        { name: "Jessica", age: 45},
    ];

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];

    const listItems = people.map((person, index) => 
        <li key={index}>{person.name}</li>
    )

    // Fragment is the same as <></> but you  need to assign it a key
    // so typically when using the map callback function.
    const chemists = people.filter((person) => {
        return person.profession === 'chemist';
    }).map((person) => {
        return (
            <Fragment key={person.id}>
                {person.name}
                { ' ' + person.profession}
            </Fragment>
        )
    })
    // using key/index is bad idea if data is being modified or removed
    return (
        <div>
            <h1>{names}</h1>
            {names.map((name, key) => {
                return <h1 key={key}>{name}</h1>
            })}

            {users.map((user, key) => {
                return <User key={key} name={user.name} age={user.age} />
            })}

            <ul>People: {listItems}</ul>
            <ul>Chemists: {chemists}</ul>

        </div>
    );
}

interface UserProps {
    name: string;
    age: number;
}

const User: React.FC<UserProps> = ({name, age}) => {
    return <h1>Name: {name}, Age: {age}</h1>
}

export default List;