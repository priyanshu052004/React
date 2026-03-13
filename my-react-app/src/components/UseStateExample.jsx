import { useState } from "react";

function UseStateExample() {

    const [students, setstudents] = useState({
        userName: "Siddhu",
        age: 18,    
    })

    function handelClick() {
        setstudents((std) => {
            return {...std, age: 24,  role: "Admin"}
        })
    }
    return (
        <>
            <h2>This is Example</h2>
            <p>UserName: {students.userName}</p>
            <p>Age: {students.age}</p>
            <p>Role: {students.role}</p>

            <button onClick={handelClick}>Click me</button>



        </>
    )
}

export default UseStateExample;