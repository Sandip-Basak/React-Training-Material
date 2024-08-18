import React, { useState } from "react";

function CompState(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);


    const updateName = (a) => {
        setName(a);
    }

    const updateAge = () => {
        // Updater Function
        setAge(age => age+1)
        setAge(age => age+1)
        setAge(age => age+1)
    }
    return(
        <div>
            <h3>{name}</h3>
            <button onClick={() => updateName("Deadpool")} className="btn btn-outline-success">Click Me</button>
            
            <h3>{age}</h3>
            <button onClick={updateAge} className="btn btn-outline-success">Click Me</button>
        </div>
    );
}
export default CompState;