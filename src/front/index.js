import React from 'react';
import './style.scss';

// 3px = 1cm

const Front = (props) => (
  <div className="front">
    {props.data && props.data.src && <img 
      id="img_front" 
      alt="Camisa Frente"
      src={props.data.src}
      style={{
        marginTop: props.data.topDistance * 3,
        marginLeft: -(props.data.width * 3) / 2, // center on screen
        width: props.data.width * 3
      }}
    /> }
  </div>
);

export default Front;