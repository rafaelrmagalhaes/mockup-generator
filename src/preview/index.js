import React from 'react';
import './style.scss';

// 3px = 1cm

const Preview = (props) => (
  <div className="preview" style={{ backgroundImage: `url(${props.bgImg})` }}>
    {props.data && props.data.src && <img 
      id="img_preview" 
      alt="Camisa Frente"
      src={props.data.src}
      style={{
        marginTop: props.data.topDistance * 3,
        marginLeft: `${props.data.leftDistance}px`,
        width: props.data.width * 3
      }}
    /> }
  </div>
);

export default Preview;