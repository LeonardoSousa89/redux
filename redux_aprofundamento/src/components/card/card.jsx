import { Component } from "react";

import './card.css'

export default class Card extends Component{

    state={
        imageURI: '',
        desc: '',
        preco: 0
    }

    render(){
        return(
            <main className="app-card">

                <img src={this.props.src} alt={this.props.alt} />
                
                <div className="desc">
                    <p>{this.props.desc}</p>
                </div>

                <div className="preco">
                    <strong>{this.props.preco}</strong>
                </div>

            </main>
        )
    }
}