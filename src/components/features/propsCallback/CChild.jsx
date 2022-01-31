import React from 'react';
import CParent from './CParent';

const CChild = (props) => {
   
   const changeCName = (event) => {
      props.onChange(event.target.value)
   }
  return (
  <div>
     <h4>CallBack Child</h4>
     <form>
        <input placeholder='here text' onChange={changeCName} />
     </form>
     
     
  </div>
  )
};

export default CChild;