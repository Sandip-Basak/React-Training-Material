import React, {useState} from "react";

function UpdateList(){
    const [items, setItems] = useState(["Biriyani","Ice Cream", "Dahi Puchka"]);
    const [added, setAdded]=useState(false);
    function listAdd(){
        const newItem = document.getElementById("add").value;
        document.getElementById("add").value="";
        setItems(i => [...i, newItem]);
        setAdded(!added);
    }
    function listRemove(index){
        setItems(items.filter((_,i) => i!==index))
    }
    return (
        <div>
            <ul>
                {items.map((i, index) => <li key={index} onClick={() => listRemove(index)}>{i}</li>)}
            </ul>
            <input type="text" id="add" placeholder="Enter a item to add to the list..."/>
            <button onClick={listAdd} className={added ? "btn btn-danger": ""}>ADD</button>
        </div>
    );
}

export default UpdateList;