import { React, useState } from 'react';

// import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './cart.css'
import buy from '../images/buy'
const Cart = () => {
    const [category, setCategory] = useState("all")
    let total=0
    const cl = buy.map((c) => {
        if (c[1] == category || category == "all") {
            total=total+c[3]
            return (
                <div>
                    <img class='p-2 cloth' src={c[0]}/>
                    <p class='p-2'>{'$'+c[3]}</p>
                </div>
            )
        }
    })

    const click = (cat) =>{
        total=0
        setCategory(cat)
    }

    return (
        <div>
            <div class='d-flex flex-row p-2'>
                <button class='btn btn-success p-2' onClick={()=>click("all")}>All</button>
                <button class='btn btn-success p-2' onClick={()=>click("tops")}>Tops</button>
                <button class='btn btn-success p-2' onClick={()=>click("bottoms")}>Bottoms</button>
                <button class='btn btn-success p-2' onClick={()=>click("shoes")}>Shoes</button>
                <button class='btn btn-success p-2' onClick={()=>click("accessories")}>Accessories</button>
                <button class='btn btn-success p-2' onClick={()=>click("hats")}>Hats</button>
            </div>
            <div class='d-flex p-2 flex-wrap'>
                {cl}
            </div>
            <p>{"Total price: $"+total}</p>
        </div>
    )

}

export default Cart