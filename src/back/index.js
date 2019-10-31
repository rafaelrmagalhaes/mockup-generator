import React from 'react';
import './style.scss';

// 3px = 1cm

const Back = (props) => (
  <div className="back">
    {props.data && props.data.src && <img 
      id="img_back" 
      alt="Camisa Costas"
      src={props.data.src}
      style={{
        marginTop: props.data.topDistance * 3,
        marginLeft: `${props.data.leftDistance}px`,
        width: props.data.width * 3
      }}
    /> }
  </div>
);

export default Back;