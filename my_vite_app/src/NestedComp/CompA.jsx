import React, {useState, createContext} from "react";
import CompB from "./CompB";

export const UserContext = createContext();

function CompA(){
    
    const [user, setUser] = useState("Crazy_Champ")

    return(
        <div className="container border border-2 border-dark my-1">
            <h1>Component A</h1>
            <h2>{user}</h2>
            <UserContext.Provider value={user}>
                <CompB />
            </UserContext.Provider>
        </div>
    );
}

export default CompA;