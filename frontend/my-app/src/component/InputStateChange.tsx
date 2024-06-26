import React, { useState, ChangeEvent } from "react";


interface userName {
    nickname : string
    name : string
}




function TextInput() {

    const [input, setInput] = useState<userName>({
        nickname : "",
        name : ""
    }
    ) 
    


    const onInput = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        
        


    }


    return (
        <div>
            
        </div>
    )

}