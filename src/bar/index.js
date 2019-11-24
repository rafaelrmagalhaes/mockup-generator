import React, { Component } from "react";

export default class Bar extends Component {
  constructor() {
    super();

    this.state = {
      src: null,
      width: 10,
      topDistance: 0,
      leftDistance: 0
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      this.props.onUpdate(nextState);
    }
  }

  showUploadedImg(e) {
    const f = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (() => {
      return e => {
        this.setState({
          src: e.target.result
        });
      };
    })();

    reader.readAsDataURL(f);
  }

  render() {
    return (
      <div className={this.props.position}>
        <p>{this.props.position === "left" ? "Frente" : "Costas"}:</p>
        <fieldset>
          <legend>Imagem {this.props.index}</legend>
          {this.state.src && (
            <img className="preview_bar" src={this.state.src} alt="Preview" />
          )}
          <input
            type="file"
            name="file"
            onChange={e => this.showUploadedImg(e)}
          />
          <br />
          <br />
          <label htmlFor="top">
            Distância da gola:{" "}
            <input
              type="range"
              id="top"
              min="6"
              max="200"
              value={this.state.topDistance}
              onChange={e => this.setState({ topDistance: e.target.value })}
            />
          </label>
          <br />
          <br />
          <label htmlFor="left">
            Distância horizontal:{" "}
            <input
              type="range"
              id="left"
              min="0"
              max="400"
              value={this.state.leftDistance}
              onChange={e => this.setState({ leftDistance: e.target.value })}
            />
          </label>
          <br />
          <br />
          <label htmlFor="top">
            Tamanho da imagem:{" "}
            <input
              type="range"
              id="width"
              min="10"
              max="150"
              value={this.state.width}
              onChange={e => this.setState({ width: e.target.value })}
            />
          </label>
        </fieldset>
      </div>
    );
  }
}
