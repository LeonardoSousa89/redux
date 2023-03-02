import { Component } from "react";

import './card.css'

export default class Card extends Component{

    render(){
        return(
            <main className="app-card">

                <div className="img">
                    <img src={this.props.src} alt={this.props.alt} />
                </div>

                <div className="nome_produto">
                    <p>{this.props.nome_produto}</p>
                </div>

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