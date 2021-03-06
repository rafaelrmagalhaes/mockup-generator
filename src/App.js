import React, { Component } from "react";
import html2canvas from "html2canvas";
import "./App.scss";
import Preview from "./preview";
import Bar from "./bar";
import marca_dagua from "./marca_dagua.png";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      type: 'comum',
      color: "#fff",
      frontData: null,
      frontData2: null,
      backData: null,
      backData2: null,
      clientName: ""
    };
  }

  changeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  changeColor(e) {
    this.setState({
      color: e.target.value
    });
  }

  print() {
    html2canvas(document.getElementById("canvas")).then(canvas => {
      var a = document.createElement("a");
      a.href = canvas.toDataURL("image/jpeg");
      a.download = `mockup_${this.state.clientName}.jpg`;
      a.click();
    });
  }

  updateClientName(e) {
    this.setState({
      clientName: e.target.value
    });
  }

  render() {
    return (
      <div className="main">
        <a href="#" className="print" onClick={() => this.print()}>
          Imprimir
        </a>

        <ul className="info">
          <li>
            <input
              type="text"
              placeholder="Nome do Cliente"
              className="client"
              onChange={e => this.updateClientName(e)}
            />
          </li>
          <li>
            <div className="type">
              <label htmlFor="type">Tipo da camisa:</label>
              <select id="type" onChange={e => this.changeType(e)}>
                <option value="comum">Comum</option>
                <option value="polo">Polo</option>
                <option value="baby_look">Baby Look</option>
                <option value="baby_look_raglan">Baby Look Raglan</option>
              </select>
            </div>
          </li>
          <li>
            <div className="color">
              <label htmlFor="color">Cor da camisa:</label>
              <select id="color" onChange={e => this.changeColor(e)}>
                <option value="#fff">Branca</option>
                <option value="#000">Preta</option>
                <option value="#5b253d">Açaí</option>
                <option value="#ffeb88">Amarela Bebê</option>
                <option value="#ffdd02">Amarela Canário</option>
                <option value="#ffc000">Amarela Ouro</option>
                <option value="#00f">Azul</option>
                <option value="#bfdef2">Azul Bebê</option>
                <option value="#083c78">Azul Marinho</option>
                <option value="#000032">Azul Royal</option>
                <option value="#1d858c">Azul Turquesa</option>
                <option value="#74797a">Cinza</option>
                <option value="#353738">Cinza Chumbo</option>
                <option value="#c7c7c7">Cinza Prata</option>
                <option value="#e9d2fe">Lilás Claro</option>
                <option value="#a69bd7">Lilás Escuro</option>
                <option value="#521d6b">Roxo</option>
                <option value="#7e4568">Uva</option>
                <option value="#0f0">Verde</option>
                <option value="#2f3b04">Verde Escuro</option>
                <option value="#f00">Vermelha</option>
              </select>
            </div>
          </li>
        </ul>

        <hr />

        <Bar
          position="left"
          index={1}
          onUpdate={frontData => this.setState({ frontData })}
        />
        <Bar
          position="left"
          index={2}
          onUpdate={frontData2 => this.setState({ frontData2 })}
        />
        <Bar
          position="right"
          index={2}
          onUpdate={backData2 => this.setState({ backData2 })}
        />
        <Bar
          position="right"
          index={1}
          onUpdate={backData => this.setState({ backData })}
        />

        <div id="canvas">
          <img
            src={marca_dagua}
            className="watermark"
            alt="Estampa Personalizada"
          />
          <div className="mockup" style={{ backgroundColor: this.state.color }}>
            <div
              className="preview"
              style={{ backgroundImage: `url('./mockups/${this.state.type}_frente.png')` }}
            >
              <Preview data={this.state.frontData} />
              <Preview data={this.state.frontData2} />
            </div>
            <div
              className="preview"
              style={{
                backgroundImage: `url('./mockups/${this.state.type}_costas.png')`,
                paddingTop: 20
              }}
            >
              <Preview data={this.state.backData} />
              <Preview data={this.state.backData2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
