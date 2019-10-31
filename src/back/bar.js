import React, { Component } from 'react';

export default class FrontBar extends Component {
  constructor() {
    super();

    this.state = {
      src: null,
      width: 25,
      topDistance: 6,
    }
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
      return (e) => {
        this.setState({
          src: e.target.result
        });
      };
    })();
    
    reader.readAsDataURL(f);
  }

  render() {
    return (
      <>
        <p>Costas:</p>
        <input type="file" name="file" onChange={(e) => this.showUploadedImg(e)} />
        <br /><br />
        <label htmlFor="top">Distância da gola: <input type="range" id="top" min="6" max="60" value={this.state.topDistance} onChange={e => this.setState({ topDistance: e.target.value })} />{this.state.topDistance} centímetros</label>
        <br /><br />
        <label htmlFor="top">Tamanho da imagem: <input type="range" id="width" min="10" max="80" value={this.state.width} onChange={e => this.setState({ width: e.target.value })} />{this.state.width} centímetros</label>
      </>
    );
  }
}