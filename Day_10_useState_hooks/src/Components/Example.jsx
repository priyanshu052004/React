import React, { useState } from 'react'
export default function Example() {

    const [name, setname] = useState(true);
    return (
        <div>
            <button onClick={()=>setname(!name)}>
                Toggle
            </button>

            {
                name ? <h1>True called </h1>: <h1> False called</h1>
                }
        </div>
    )
}