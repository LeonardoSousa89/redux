import { Component } from "react";

import './carrinho.css'

import sacola from '../../assets/bolsa-de-compras.png'

export default class Carrinho extends Component{
    
    
    state={
        notificacao: '',
        contador: 0
    }

    bemVindo(){
        console.log('seja bem vindo')
    }
        
    addClique(){
        console.log(this.state.contador+=1)
        this.verificarCarrinho()
    }

    verificarCarrinho(){
        if(this.state.contador > 0) alert('item adicionado ao carrinho')
    }

    componentDidMount(){
        this.bemVindo()
    }

    render(){
        return(
            <main className="app-carrinho">
                <img src={sacola} 
                     alt="sacola de compras"
                     onClick={()=>this.addClique()}
                     />
            </main>
        )
    }
}