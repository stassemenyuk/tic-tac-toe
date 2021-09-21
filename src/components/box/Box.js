import React from 'react';

import './Box.css';

export default function Box(props) {
  const { handleClick, fill, id } = props;
  return (
    <div className="box" onClick={() => handleClick(id)}>
      <div className="index">{id}</div>
      <div className="sign">{fill}</div>
    </div>
  );
}
