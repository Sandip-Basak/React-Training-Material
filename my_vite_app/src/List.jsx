function List(props){

    const items=props.items;
    
    // foods.sort((a,b)=>a.name.localeCompare(b.name)); // Alphabetical
    // foods.sort((a,b)=>b.name.localeCompare(a.name)); // Reverse Alphabetical
    // foods.sort((a,b)=>a.calories - b.calories); // Numeric
    // foods.sort((a,b)=>b.calories - a.calories); // Reverse Numeric

    // const CalFoods = foods.filter(i => i.calories<300)


    const listItems = items.map(i => <li key={i.id}>{i.name}: {i.calories}</li>)
    return(
        <div>
            <h3>{props.catagory}</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}
export default List;