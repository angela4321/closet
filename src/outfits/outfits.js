import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './outfits.css'
import Outfit from './outfit'
import Popup from './popup'
const Outfits = () => {
    const [fits, setFits] = useState([
        [1, 3, 2, 4],
        [2, 3],
        [1, 4],
        [2, 4],
    ])
    const [showPopup, setShowPopup] = useState(false)

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