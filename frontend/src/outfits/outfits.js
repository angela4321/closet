import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './outfits.css'
import Outfit from './outfit'
import Popup from './popup'
class Outfits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fits: [],
            showPopup: false,
            data: []
        }
        this.getData();
        this.getFits();
    }
    getPics = () => {
        console.log(this.state.fits);
        return (
            this.state.fits.map((fit) => {
                return (
                    <Outfit data={this.state.data} fits={fit} />
                )
            })
        )
    }
    getFits = () => {
        var fits = []
        fetch("http://localhost:3000/outfits").then((res) => res.json())
        .then((outfits) => {
            outfits.map((outfit)=>{
                this.setState({fits: this.state.fits.concat([outfit.clothes])})

            })
        })
    }
    getData = () => {
        fetch("http://localhost:3000/upload").then((res) => res.json())
        .then((clothes) => {
            this.setState({data: clothes})
        })
    }

    render() {
        if (this.state.showPopup) {
            return (
                <Popup close={(show) => {
                    this.setState({showPopup: show})
                }} 
                create={(fits) =>{
                    this.setState({fits: fits})
                }} fits={this.state.fits} data={this.state.data}/>
            )
        }
        return (
            <div>
                <div class='d-flex flex-wrap'>
                    {this.getPics()}
                </div>
                <button class='add btn btn-success' onClick={() => this.setState({showPopup: true})}>Add outfit</button>

            </div>
        )
    }
}

export default Outfits