import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import {
    Link
  } from "react-router-dom";
const Home = () => {
    return (
        <div class="home d-flex align-items-center flex-column p-2 ">
            <h1 class='p-2'>HOME</h1>
            <Link class='btn' to='/inventory'>
                <button type='button' class='btn btn-success'>Inventory</button>
            </Link>
            <Link class='btn' to='/outfits'>
                <button type='button' class='btn btn-success p-2'>Outfits</button> 
            </Link>
            <Link class='btn' to='/cart'>
                <button type='button' class='btn btn-success p-2'>Shopping cart</button>
            </Link>
            
            
        </div>
    )
}

export default Home;