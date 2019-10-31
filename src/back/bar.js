import React, { Component } from 'react';

export default class FrontBar extends Component {
  constructor() {
    super();

    this.state = {
      src: null,
      width: 10,
      topDistance: 6,
      leftDistance: 0,
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
      <div className="right">
        <p>Costas:</p>
        <input type="file" name="file" onChange={(e) => this.showUploadedImg(e)} />
        <br /><br />
        <label htmlFor="top"><input type="range" id="top" min="6" max="60" value={this.state.topDistance} onChange={e => this.setState({ topDistance: e.target.value })} /> Distância da gola</label>
        <br /><br />
        <label htmlFor="left"><input type="range" id="left" min="0" max="250" value={this.state.leftDistance} onChange={e => this.setState({ leftDistance: e.target.value })} /> Distância horizontal</label>
        <br /><br />
        <label htmlFor="top"><input type="range" id="width" min="10" max="80" value={this.state.width} onChange={e => this.setState({ width: e.target.value })} /> Tamanho da imagem</label>
      </div>
    );
  }
}