import React from 'react';


const Slide = ({ text }) => {
  return (
    <img
      className="d-block w-100"
      src="https://placehold.co/600x200?text=Today's+Special"
      alt={text}
    />
  );
};

export default Slide;
