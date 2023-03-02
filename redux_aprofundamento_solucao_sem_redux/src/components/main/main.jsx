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
                    nome_produto={'Pneu Pirelli'}
                    desc={"Pneu Aptany Aro 20 Ra301 265/50r20 111v Xl..."}
                    preco={4458.56.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                />

                <Card 
                    src={headphone}
                    alg={'imagem do card'}
                    nome_produto={'Headphone sony'}
                    desc={'Headphones Bluetooth ou com fio de alta qualidade, modelos com cancelamento de ruído, profissionais ou para o cotidiano...'}
                    preco={564.25.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                />

                <Card 
                    src={notebook}
                    alg={'imagem do card'}
                    nome_produto={'Notebook MacBook'}
                    desc={'Apple MacBook (de 24 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 8‑core, 8 GB RAM, 512 GB)... '}
                    preco={22256.57.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                />

                <Card 
                    src={tv}
                    alg={'imagem do card'}
                    nome_produto={'Smart Tv AOC'}
                    desc={'Smart TV LED 32” HD AOC Roku 32S5195/78 com Wi-fi, Controle Remoto com atalhos, Roku Mobile...'}
                    preco={1042.24.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                />

            </main>
        )
    }
}