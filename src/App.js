import React, { Component } from "react";
import html2canvas from "html2canvas";
import "./App.scss";
import Preview from "./preview";
import Bar from "./bar";
import marca_dagua from "./marca_dagua.png";
import camisa_frente from "./camisa_frente.png";
import camisa_costas from "./camisa_costas.png";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      color: "#fff",
      frontData: null,
      frontData2: null,
      backData: null,
      backData2: null,
      clientName: ""
    };
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
        <div id="canvas">
          <img
            src={marca_dagua}
            className="watermark"
            alt="Estampa Personalizada"
          />
          <div className="mockup" style={{ backgroundColor: this.state.color }}>
            <div
              className="preview"
              style={{ backgroundImage: `url(${camisa_frente})` }}
            >
              <Preview data={this.state.frontData} />
              <Preview data={this.state.frontData2} />
            </div>
            <div
              className="preview"
              style={{ backgroundImage: `url(${camisa_costas})` }}
            >
              <Preview data={this.state.backData} />
              <Preview data={this.state.backData2} />
            </div>
          </div>
        </div>

        <input
          type="text"
          placeholder="Nome do Cliente"
          className="client"
          onChange={e => this.updateClientName(e)}
        />

        <div className="color">
          <label htmlFor="color">Cor da camisa:</label>
          <select id="color" onChange={e => this.changeColor(e)}>
            <option value="#fff">Branca</option>
            <option value="#f00">Vermelha</option>
            <option value="#00f">Azul</option>
            <option value="#0f0">Verde</option>
            <option value="#000">Preta</option>
          </select>
        </div>

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
      </div>
    );
  }
}
