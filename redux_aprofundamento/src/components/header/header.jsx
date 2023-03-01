import { Component } from "react";

import '../../App.css'
import './header.css'

import Carrinho from "../carrinho_de_compra/carrinho";

export default class Header extends Component{
    render(){
        return(
            <header className="app-header">
              <div>

                <span className="app-header-title">
                    <h2>Redux Carrinho</h2>
                </span>

                <span className="app-header-carrinho">
                    <Carrinho />
                </span>
              
              </div>
            </header>
        )
    }
}