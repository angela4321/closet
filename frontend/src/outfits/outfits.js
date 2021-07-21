import { React, useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './outfits.css'
import Outfit from './outfit'
import Popup from './popup'
import ls from 'local-storage'
const Outfits = () => {

    if( !ls.get("outfits")){
        ls.set("outfits",[])
    }
    const [fits, setFits] = useState(ls.get("outfits"))

    const [showPopup, setShowPopup] = useState(false)
    useEffect(()=>{
        ls.set("outfits",fits)
    })

    const pics = fits.map((arr) => {
        return (
            <Outfit ids={arr} />
        )
    })
    const getPics=()=>{
        console.log(fits)
        return( 
            fits.map((arr) => {
                return (
                    <Outfit ids={arr} />
                ) 
            }) 
        )
        
    }
    if (showPopup) {
        return (
            <Popup close={setShowPopup} create={setFits} fits={fits} />
        )
    }
    return (
        <div>
            <div class='d-flex flex-wrap'>
                {getPics()}
            </div>
            <button class='add btn btn-success' onClick={() => setShowPopup(true)}>Add outfit</button>
           
        </div>
    )
}

export default Outfits