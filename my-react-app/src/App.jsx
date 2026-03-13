import './App.css'
import About from './components/About';
import UseStateExample from './components/UseStateExample';

function App() {

  let name = "siddhu";

  let students = {
    userName: "Mayur",
    age: 18,
    role: "Admin"
  }

  return (
    <>
      <h2>Hello From S2P</h2>
      <h2>Hello From S2P</h2>
      {/* <h3>Name: {name}</h3>
      <p>UserName: {students.userName}</p>
      <p>Age: {students.age}</p> */}
      {/* <p>UserName: {students.userName}</p> */}



      {
      <About name={"Mayur"}
        std={{
          userName: "Siddhu",
          age: 18,
          role: "Admin"
        }}
      /> 
      }

<UseStateExample/>





    </>

  )
}

export default App
