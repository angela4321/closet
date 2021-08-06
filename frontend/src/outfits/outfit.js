import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './outfit.css'
class Outfit extends React.Component {
    constructor(props) {
        super(props);
        const clothes = props.data.map((item) => {
            if(props.fits.some(id => id===item._id)){
                var path = "../images" + item.image.substr(item.image.lastIndexOf('/'));
                var im = document.createElement("IMG");
                im.setAttribute("src", path);
                return (
                    <img key={item._id+'1'} alt='pic' className='p-2 cloth' src={im.src}/>
                )
            }
        })
        this.state = {
            clothes: clothes
        }
    }
    render() {
        return (
            <div class='fit d-flex flex-row flex-wrap'>
                {this.state.clothes}
            </div>
        )
    }
}

export default Outfit