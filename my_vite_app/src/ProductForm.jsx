import React, {useState} from "react";

function ProductForm(){
    const [product, setProduct] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    function productChange(e){
        setProduct(e.target.value);
    }
    function quantityChange(e){
        setQuantity(e.target.value);
    }
    function paymentChange(e){
        setPayment(e.target.value);
    }
    function shippingChange(e){
        setShipping(e.target.value);
    }
    return (
        <div>
            <input type="text" value={product} onChange={productChange} />
            <p>Product:- {product}</p>
            <input type="text" value={quantity} onChange={quantityChange} />
            <p>Product:- {quantity}</p>
            <select value={payment} onChange={paymentChange}>
                <option value="">Select an Option</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Credit/Debit Card">Credit/Debit Card</option>
                <option value="Digital Wallets">Digital Wallets</option>
                <option value="UPI">UPI</option>
            </select>
            <p>Payment Method:-{payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={shippingChange}/>
                Pick Up
            </label><br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={shippingChange}/>
                Delivery
            </label>
            <p>Shipping:-{shipping}</p>
        </div>
    );
}

export default ProductForm;