import React, { Component } from 'react';
import './App.scss';
import Front from './front';
import FrontBar from './front/bar';
import BackBar from './back/bar';
import Back from './back';
import marca_dagua from './marca_dagua.png';

export default class App extends Component {
  constructor() {
    super();
  
    this.state = {
      color: '#fff',
      frontData: null,
      backData: null,
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
          <Front 
            data={this.state.frontData}
          />
          <Back 
            data={this.state.backData}
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

        <FrontBar onUpdate={ frontData => this.setState({ frontData }) } />
        <BackBar onUpdate={ backData => this.setState({ backData }) } />
      </div>
    );
  }
}
