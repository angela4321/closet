import { React, useState } from 'react';

// import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// const c = require("./public/images/profile")
import './inventory.css'
const c = require('../images/ProfessionalHeadshot.jpg')
// import clothes from '../images/images'
const Inventory = () => {

    const [clothes, setClothes] = useState([]);
    const [category, setCategory] = useState("all");
    async function getClothes () {
        const data = await fetch("http://localhost:3000/upload").then((res)=>res.json())
        .then((data) => {
            return data.map((c) => {
                if (c.category == category || category == "all") {
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
        })
        .then((cl) => {
            var changed = false;
            if(cl.length!=clothes.length) changed=true;
            if(changed){
                setClothes(cl);
                return;
            }
            for(var i = 0; i < cl.length; i++){
                if (cl[i].key!=clothes[i].key){
                    changed = true;
                    break;
                }
            }
            if(changed){
                setClothes(cl);
            }
        });
        // const cl = data.map((c) => {
        //     if (c.category == category || category == "all") {
        //         var path = "../images"+c.image.substr(c.image.lastIndexOf('/'));
        //         var im = document.createElement("IMG");
        //         im.setAttribute("src", path);
        //         return (
        //             <img key={c._id} alt='pic' className='p-2 cloth' src={im.src} />
        //         )
        //     }
        // })
        
    }
    getClothes();
    return (
        <div>
            <div className='d-flex flex-row p-2'>
                <button className='btn btn-success p-2' onClick={() => setCategory("all")}>All</button>
                <button className='btn btn-success p-2' onClick={() => setCategory("tops")}>Tops</button>
                <button className='btn btn-success p-2' onClick={() => setCategory("bottoms")}>Bottoms</button>
                <button className='btn btn-success p-2' onClick={() => setCategory("shoes")}>Shoes</button>
                <button className='btn btn-success p-2' onClick={() => setCategory("accessories")}>Accessories</button>
                <button className='btn btn-success p-2' onClick={() => setCategory("hats")}>Hats</button>
            </div>
            <div className='d-flex p-2 flex-wrap'>
                {clothes}
            </div>
            <form onSubmit={(_event) => {
                const img = document.getElementById('upload').files[0];
                const category = document.getElementById('categories').value;
                const req = new FormData();
                req.append("category",category);
                req.append("image",img);
                axios.post("http://localhost:3000/upload",req);
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
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default Inventory