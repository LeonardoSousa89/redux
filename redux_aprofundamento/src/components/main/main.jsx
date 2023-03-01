import { Component } from "react";

import '../../App.css'
import './main.css'

import Card from '../card/card'

export default class Main extends Component{
    render(){
        return(
            <main className="app-main">
                <h2>Main</h2>
                <Card />
            </main>
        )
    }
}