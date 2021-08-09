import { React, useState } from 'react';


import axios from 'axios'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './cart.css'
import buy from '../images/buy'
const Cart = () => {
    const [clothes, setClothes] = useState([]);
    const [category, setCategory] = useState("all")
    const [total, setTotal] = useState(0)
    async function getClothes () {
        await fetch("http://localhost:3000/cart").then((res)=>res.json())
        .then((data) => {
            var tot=0
            var temp =  data.map((c) => {
                if (c.category === category || category === "all") {
                    tot+=c.price;
                    var path = "../images"+c.image.substr(c.image.lastIndexOf('/'));
                    var im = document.createElement("IMG");
                    im.setAttribute("src", path);
                    return (
                        <img key={c._id} alt='pic' className='p-2 cloth' src={im.src} />
                    )
                }
            })
            .filter((element)=>{
                if(element!=null) return element;
            })
            if(tot!=total){
                setTotal(tot)
            }
            return temp
        })
        .then((cl) => {
            var changed = false;
            if(cl.length!==clothes.length) changed=true;
            if(changed){
                setClothes(cl);
                return;
            }
            for(var i = 0; i < cl.length; i++){
                if (cl[i].key!==clothes[i].key){
                    changed = true;
                    break;
                }
            }
            if(changed){
                setClothes(cl);
            }
        });
        
    }
    getClothes();
    const click = (cat) =>{
        setTotal(0)
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
                {clothes}
            </div>
            <p>{"Total price: $"+total}</p>
            <form onSubmit={(_event) => {
                const img = document.getElementById('upload').files[0];
                const category = document.getElementById('categories').value;
                const price = parseInt(document.getElementById('price').value);
                const req = new FormData();
                req.append("category",category);
                req.append("image",img);
                req.append("price",price);
                axios.post("http://localhost:3000/cart",req);
            }}>
                <input type='file' id='upload' accept='image/*' />
                <label htmlFor='categories'>Select a category.</label>
                <select id='categories' name='categories'>
                    <option value='all'>All</option>
                    <option value='tops'>Tops</option>
                    <option value='bottoms'>Bottoms</option>
                    <option value='shoes'>Shoes</option>
                    <option value='accessories'>Accessories</option>
                    <option value='hats'>Hats</option>
                </select>
                <label htmlFor='price'>Price:</label>
                <input type='text' id='price'/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default Cart