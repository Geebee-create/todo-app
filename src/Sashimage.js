import React from 'react';

const Sashimage = (props) => {
  return (
    <div className="Sashimage">
      <img src={props.imageSrc} alt={props.altText} />
    </div>
  );
}

export default Sashimage;