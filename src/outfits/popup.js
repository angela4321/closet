import { React,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './outfits.css'
import buy from '../images/buy'
import images from '../images/images'
const Popup = ({ close, create, fits }) => {
    const [selected,setSelected]= useState([])
    const c1 = buy.map((c) => {
        return (
            <img class='cloth' src={c[0]} onClick={() => select(c)} />
        )
    })

    const c2 = images.map((c) => {
        return (
            <img class='cloth' src={c[0]} onClick={() => select(c)} />
        )
    })

    const c3 = c1.concat(c2)

    const select = (item) => {
        if (selected.some(x => x == item[2])) {
            setSelected(selected.filter(x => x != item[2]))

        }
        else {
            setSelected(selected.concat(item[2]))
        }
    }

    const save = () => {
        create(fits.concat([selected]))
        console.log(fits.concat([selected]))
        close(false)
    }
    const getSelected=()=>{
        const s1 = buy.map((c)=>{
            if(selected.some(x=>x==c[2])){
                return(
                    <img class='cloth' src={c[0]}/>
                )
            }
        })
        const s2 = images.map((c)=>{
            if(selected.some(x=>x==c[2])){
                return(
                    <img class='cloth' src={c[0]}/>
                )
            }
        })
        return s1.concat(s2)
    }

    return (
        <div>
            <div class='d-flex flex-wrap'>
                {c3}
                
            </div>
            <br/>
            <div class='d-flex flex-wrap'>
                {getSelected()}
            </div>
            <div class='d-flex flex-row'> 
                <button onClick={() => close(false)}>Close</button>
                <button onClick={() => save()}>Save</button>
            </div>
        </div>
    )
}

export default Popup