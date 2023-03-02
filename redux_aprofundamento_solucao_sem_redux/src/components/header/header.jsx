import { Component } from "react";

import '../../App.css'
import './header.css'

import Carrinho from "../carrinho_de_compra/carrinho";

import sacola from '../../assets/bolsa-de-compras.png'


export default class Header extends Component{

    state={
        contador: this.props.contador
    }


    addClique(){
        let incremento=this.state.contador+=1
        console.log(incremento)
    }

    render(){
        return(
            <header className="app-header">

              <div>

                <span className="app-header-title">
                    <h2>Redux Carrinho</h2>
                </span>

                <span className="app-header-carrinho"
                    value={this.props.contador}
                    onClick={this.props.toast.bind(this)}
                >
                 
                    <Carrinho src={sacola} 
                              alt='sacola de compras' 
                              addClique={this.addClique.bind(this)} 
                    />
                </span>
              
              </div>
            </header>
        )
    }
}