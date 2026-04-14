
import { useState } from "react";

export default function MultipalCondition(){
    const [count,setcount] = useState(0);

    return(
        <div>
            <h1>Multipal Condition</h1>
            <h1>{count} </h1>
            <button onClick={()=>setcount(count + 1)}>Click Me</button>
            {
                count == 0 ? <h1> count is 0</h1> : count == 1 ? <h1>count is 1</h1> : count == 2 ? <h1>count is 2</h1> : <h1>Other Count</h1>
            }
        </div>
    )
}