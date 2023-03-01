import { Component } from "react";
import '../../App.css'
import Carrinho from "../carrinho_de_compra/carrinho";
import './header.css'

export default class Header extends Component{
    render(){
        return(
            <header className="app-header">
                <h2>Header</h2>
                <Carrinho />
            </header>
        )
    }
}