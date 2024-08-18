import React from "react";
import CompC from "./CompC";
function CompB(){

    return(
        <div className="container border border-2 border-dark my-1">
            <h1>Component B</h1>
            <CompC />
        </div>
    );
}

export default CompB;