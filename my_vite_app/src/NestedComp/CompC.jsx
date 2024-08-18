import React, {useContext} from "react";
import CompD from "./CompD";
import { UserContext } from "./CompA";
function CompC(){

    const user = useContext(UserContext);

    return(
        <div className="container border border-2 border-dark my-1">
            <h1>Component C</h1>
            <h2>Hello from CompC {user}</h2>
            <CompD />
        </div>
    );
}

export default CompC;