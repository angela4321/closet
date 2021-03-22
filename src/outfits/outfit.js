import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import clothes from '../images/images'
import buy from '../images/buy'
import './outfit.css'
const Outfit = ({ids}) => {
    const cl = clothes.map((c)=>{
        if(ids.some(x=>x==c[2])){
            return(
                <img class='cloth' src={c[0]}/>
            )
        }
    })
    const c2 = buy.map((c)=>{
        if(ids.some(x=>x==c[2])){
            return(
                <img class='cloth' src={c[0]}/>
            )
        }
    })
    return (
        <div class='fit d-flex flex-row flex-wrap'>
            {cl.concat(c2)}
        </div>
    )
}

export default Outfit