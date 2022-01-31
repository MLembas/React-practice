import React, {useState} from 'react';
import CChild from './CChild';


const CParent = () => {
   const [cName, setCName] = useState('')

   const changeCName = (cName) => {
      setCName(cName)
   }
   
  return (
  <div>
     <h4>CallBack Parent</h4>
     <h4>Recived props: {cName} </h4>
     
     <CChild onChange={changeCName} />
     
  </div>
  )
};

export default CParent;