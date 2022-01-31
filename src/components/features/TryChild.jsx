import React from 'react';

const TryChild = (props) => {
   console.log(props)
  return (
  <div>
     <h4>Child</h4>
     <h4>Recived props: {props.TN} </h4>
     
  </div>
  )
};

export default TryChild;
