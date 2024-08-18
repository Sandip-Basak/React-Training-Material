import React, {useState ,useRef, useEffect} from "react";

// useRef dosent re-render the component 

function UseRef(){
    const [count1, setCount1] = useState(0);
    const count2 = useRef(0);

    useEffect(() => {
        console.log("Component Re-rendered");
    });

    return (
        <div>
            <button onClick={() => {setCount1(c=>c+1)}}>Click Me for count1:- {count1}</button>
            <button onClick={() => {
                count2.current++
                console.log(count2.current)}}>
                    Click Me for count2
            </button>
        </div>
    );
}
export default UseRef;