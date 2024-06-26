import React, { useState } from "react";



function AlarmDropDown() {

    return(
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
    )
    


}


function AlarmButton() {
    const [isOpened, setIsOpened] = useState(false) 

    const toggleDropDown = () => {
        setIsOpened(isOpened => !isOpened)
    }
    

    return (
        <div>
            <button onClick={toggleDropDown}></button>
            {isOpened && <AlarmButton/>}
        </div>
    )


}


function Alarm() {

    return (
        <div>
            
            <button>
            
            </button>
        </div>
    );
}


export default Alarm;