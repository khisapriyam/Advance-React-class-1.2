import React, { useContext } from 'react';
import MsgContext from '../context/msgContext';

const Page1 = () => {

  const { msg, setMsg, ageCal } = useContext(MsgContext);
    

  return (
    <div className="my-3">
        <input className="form-control" value={ msg } onChange={(e) => setMsg(e.target.value)} type="text" />
        <hr />
        <h1>{ msg }</h1> 
    </div>
  )
};

export default Page1;