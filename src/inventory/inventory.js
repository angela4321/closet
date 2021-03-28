import { React, useState } from 'react';

// import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './inventory.css'
import clothes from '../images/images'
const Inventory = () => {
    const [category, setCategory] = useState("all")
    const cl = clothes.map((c) => {
        if (c[1] == category || category == "all") {
            return (
                <img class='p-2 cloth' src={c[0]} />
            )
        }
    })

    return (
        <div>
            <div class='d-flex flex-row p-2'>
                <button class='btn btn-success p-2' onClick={()=>setCategory("all")}>All</button>
                <button class='btn btn-success p-2' onClick={()=>setCategory("tops")}>Tops</button>
                <button class='btn btn-success p-2' onClick={()=>setCategory("bottoms")}>Bottoms</button>
                <button class='btn btn-success p-2' onClick={()=>setCategory("shoes")}>Shoes</button>
                <button class='btn btn-success p-2' onClick={()=>setCategory("accessories")}>Accessories</button>
                <button class='btn btn-success p-2' onClick={()=>setCategory("hats")}>Hats</button>
            </div>
            <div class='d-flex p-2 flex-wrap'>
                {cl}
            </div>
        </div>
    )

}

export default Inventory