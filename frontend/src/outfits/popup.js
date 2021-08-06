import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './outfits.css'
class Popup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: []
        }
    }

    
    render() {
        const pics = this.props.data.map((c) => {
            var path = "../images" + c.image.substr(c.image.lastIndexOf('/'));
            var im = document.createElement("IMG");
            im.setAttribute("src", path);
            return (
                <img key={c._id} alt='pic' className='p-2 cloth' src={im.src} onClick={() => {
                    if (this.state.selected.some(x => x === c._id)) {
                        this.setState({ selected: this.state.selected.filter(x => x !== c._id) })
    
                    }
                    else {
                        this.setState({ selected: this.state.selected.concat([c._id]) })
                    }
                }} />
            )
        })
    
        return (
            <div>
                <div class='d-flex flex-wrap'>
                    {pics}
                </div>
                <br/>
                <div class='d-flex flex-wrap'>
                    {this.getSelected()}
                </div>
                <div class='d-flex flex-row'> 
                    <button onClick={() => this.props.close(false)}>Close</button>
                    <button onClick={() => this.save()}>Save</button>
                </div>
            </div>
        )

    }
    select = (item) => {
        if (this.state.selected.some(x => x === item._id)) {
            this.setState({selected: this.state.selected.filter(x => x !== item._id)})

        }
        else {
            this.setState({selected: this.state.selected.concat([item._id])})
        }
    }
    
    save = () => {
        const outfit = {
            clothes: this.state.selected
        }
        fetch("http://localhost:3000/outfits", {
            method: 'POST',
            body: JSON.stringify(outfit),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        this.props.create(this.props.fits.concat([this.state.selected]));
        this.props.close(false);
    }
    getSelected=()=>{
        return this.props.data.map((c)=>{
            if(this.state.selected.some(x=>x===c._id)){
                var path = "../images" + c.image.substr(c.image.lastIndexOf('/'));
                var im = document.createElement("IMG");
                im.setAttribute("src", path);
                return (
                    <img key={c._id+'0'} alt='pic' className='p-2 cloth' src={im.src}/>
                )
            }
        })
    }

    
}

export default Popup