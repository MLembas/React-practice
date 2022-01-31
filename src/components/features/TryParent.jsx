import React, {useState} from 'react';
import TryChild from './TryChild';

const TryParent = () => {
   const [tryName, setTryName] = useState('')
   const changeTryName = (event) => {
      setTryName(event.target.value)
   }
  return (
  <div>
     <h4>Parent</h4>
     <form>
        <input placeholder='rr' onChange={changeTryName} />
     </form>
     <TryChild TN={tryName} />
  </div>
  )
};

export default TryParent;
