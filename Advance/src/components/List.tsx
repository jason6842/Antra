function List() {

    const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"];

    const users = [
        { name: "Pedro", age: 21 },
        { name: "Jake", age: 25},
        { name: "Jessica", age: 45},
    ];

    
    return (
        <div>
            <h1>{names}</h1>
            {names.map((name, key) => {
                return <h1 key={key}>{name}</h1>
            })}

            {users.map((user, key) => {
                return <User key={key} name={user.name} age={user.age} />
            })}

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