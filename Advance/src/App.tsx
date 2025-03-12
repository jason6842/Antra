import "./App.css";
import List from "./components/List";
import Planet from "./components/Planet";
import Ternary from "./components/Ternary";
// when importing from a folder, it will look for the index file
// when importing a "default export", you can name it whatever you want
import DescribingTheUI from "./DescribingTheUI";

function App() {
  const htmlInJSX = <h4>You can have html in JSX</h4>
  const age = <h3>24</h3>
  const email = <h3>test@test.com</h3>
  const user = (
    <div>
      {age}
      {email}
    </div>
  );

  


  return (
    <div>
      <DescribingTheUI />
        {htmlInJSX}
        {user}
        {/* number uses { 10 } */}
        <User name="Test1" age={25} email="test1@test1.com"/>
        <User name="Test2" age={27} email="test2@test2.com"/>
        <Job salary={90000} position="Senior SDE" company="Amazon"/>
        <Job salary={12000} position="Junior SDE" company="Google"/>
        <Job salary={10000} position="Project Manager" company="Netflix"/>
        <Ternary></Ternary>
        <List></List>
        <Planet></Planet>
    </div>
  );
}

const GetName = () => {
  return "Test Name";
}

// Components need to start with a capital letter

const getNameComponent = () => {
  return <h1>Test Name</h1>;
}

interface UserProps {
  name: string;
  age: number;
  email: string;
}

// React.FC stands for Functional Component
const User: React.FC<UserProps> = ({name, age, email}) => {
  return (
    <div>
      {name}
      {age}
      {email}
    </div>
  )
}

interface JobProps {
  salary: number;
  position: string;
  company: string;
}

const Job: React.FC<JobProps> = ({ salary, position, company}) => {
  return (
    <div>
        <div>Salary: {salary} </div>
        <div>Position: {position}</div>
        <div>Company: {company}</div>
    </div>
  )
}

export default App;
