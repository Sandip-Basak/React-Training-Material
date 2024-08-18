import React, {useEffect, useState} from "react";

// Runs after every re-render 
// useEffect(() => {})
    
// Runs only at mount
// useEffect(() => {}, [])

// Runs on mount + at value change
// useEffect(() => {}, [value])


function UseEffectComp(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // Runs after every re-render
    useEffect(() => {
        document.title=`Count:-${count}`;
    });

    // Runs only at mount
    // useEffect(() => {
    //     document.title="Using useEffect";
    // },[]);
    
    // Runs on mount + at value change
    useEffect(() => {
        document.title=`Color:- ${color}`;
    },[color]);

    function clicked(){
        setCount(c=>c+1);
    }
    function changeColor(){
        setColor(color==="green"?"red":"green");
    }

    return(
        <div>
            <h3 style={{color:color}}>Count:-{count}</h3>
            <button onClick={clicked} className="btn btn-secondary">Click</button>
            <button onClick={changeColor} className="btn btn-secondary mx-2">Change Colour</button>
        </div>
    );
}
export default UseEffectComp;