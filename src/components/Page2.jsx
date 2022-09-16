import React, { useContext } from 'react';
import MsgContext from '../context/msgContext';

const Page2 = () => {

    const { msg, ageCal } = useContext(MsgContext);
    

  return (
    <>
        <div>{ msg }</div>
        <p>{ ageCal(100) }</p>
    </>
    
    
  )
};

export default Page2;