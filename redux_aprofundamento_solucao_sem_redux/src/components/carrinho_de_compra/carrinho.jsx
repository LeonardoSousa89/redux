import { Component } from "react";

import './carrinho.css'

export default class Carrinho extends Component{

    render(){
        return(
            <main className="app-carrinho">

                <img   src={this.props.src}
                       alt={this.props.alt}
                       onClick={this.props.addClique.bind(this)}
                 />

            </main>
        )
    }
}