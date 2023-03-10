import { Component } from "react";

import '../../App.css'
import './main.css'

import Card from '../card/card'

import pneu from '../../assets/pneu.jpg'
import headphone from '../../assets/headphone.jpg'
import notebook from '../../assets/notebook.jpg'
import tv from '../../assets/tv.jpg'


export default class Main extends Component{
    render(){
        return(
            <main className="app-main">

                <Card 
                    src={pneu}
                    alg={'imagem do card'}
                    desc={'prod 1'}
                    preco={4458.56.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                />

                <Card 
                    src={headphone}
                    alg={'imagem do card'}
                    desc={'prod 2'}
                    preco={564.25.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                />

                <Card 
                    src={notebook}
                    alg={'imagem do card'}
                    desc={'prod 3'}
                    preco={22256.57.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                />

                <Card 
                    src={tv}
                    alg={'imagem do card'}
                    desc={'prod 4'}
                    preco={1042.24.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                />

            </main>
        )
    }
}