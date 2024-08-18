import React, {useContext} from "react";
import { UserContext } from "./CompA";
function CompD(){

    const user = useContext(UserContext);

    return(
        <div className="container border border-2 border-dark my-1">
            <h1>Component D</h1>
            <h2>Bye Bye...{user}</h2>
        </div>
    );
}

export default CompD;