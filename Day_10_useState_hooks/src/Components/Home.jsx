import { useState } from "react"

export default function Home(){

    const [variables, setvariables] = useState(1);

    function clickhandler(){
        setvariables(variables + 1);
    }

    return(
        <div>
            <h1>{variables}</h1>
            <button onClick={clickhandler}>Click Me</button>
        </div>
    )
}