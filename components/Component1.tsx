import { useState } from 'react'



export default function Component1( { getValue } ) {

    const [input, setInput] = useState("")
    
    let change = (event : any) => {

        {/* 
            2.2. Invoca a la función de actualización 
            con el valor del cambio
        */}
        setInput(event.target.value)

        {/* 
            2.3. Invoca el callback 
            con el valor del cambio
        */}
        getValue(event.target.value)
    }

    return (
        <>
            {/* 
                2.1. Invoca la función change cuando cambia el valor del input 
            */}
            <p><input type="text" onChange={change} /></p>
            <p>Inside Component1: {input}</p> 
        </>
    )
}