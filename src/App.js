import React, { Component } from 'react';
import './App.scss';
import Preview from './preview';
import Bar from './bar';
import marca_dagua from './marca_dagua.png';
import camisa_frente from './camisa_frente.png';
import camisa_costas from './camisa_costas.png';

export default class App extends Component {
  constructor() {
    super();
  
    this.state = {
      color: '#fff',
      frontData: [],
      backData: [],
    };
  }

  changeColor(e) {
    this.setState({
      color: e.target.value
    });
  }

  render() {
    return (
      <div className="main">
        <img src={marca_dagua} className="watermark" alt="Estampa Personalizada" />
        <div className="mockup" style={{backgroundColor: this.state.color}}>
          <Preview 
            data={this.state.frontData}
            bgImg={camisa_frente}
          />
          <Preview 
            data={this.state.backData}
            bgImg={camisa_costas}
          />
        </div>

        <div className="color">
          <label htmlFor="color">Cor da camisa:</label>
          <select id="color" onChange={(e) => this.changeColor(e)}>
            <option value="#fff">Branca</option>
            <option value="#f00">Vermelha</option>
            <option value="#00f">Azul</option>
            <option value="#0f0">Verde</option>
          </select>
        </div>

        <hr/>

        <Bar position="left" index={1} onUpdate={ frontData => this.setState({ frontData }) } />
        <Bar position="right" index={1} onUpdate={ backData => this.setState({ backData }) } />
      </div>
    );
  }
}
