import React, { useState } from "react";

function FavoriteCar(){
    const [car, setCar] = useState({
        Model: "Raptor",
        Year: 2024,
        Company: "Ford"
    });
    function modelChange(e){
        setCar(c => ({...c, Model: e.target.value}))
    }
    function yearChange(e){
        setCar(c => ({...c, Year: e.target.value}))
    }
    function companyChange(e){
        setCar(c => ({...c, Company: e.target.value}))
    }
    return (
        <div>
            <h3>My favorite car is {car.Year} {car.Company} {car.Model}</h3>
            <input type="text" value={car.Company} onChange={companyChange}/><br />
            <input type="text" value={car.Model} onChange={modelChange}/><br />
            <input type="number" value={car.Year} onChange={yearChange}/>
        </div>
    );
}
export default FavoriteCar;