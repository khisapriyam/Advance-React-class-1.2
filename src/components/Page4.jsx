import React, { useContext } from 'react';
import MsgContext from '../context/msgContext';

const Page4 = () => {

    const { msg, setMsg, userAuthData } = useContext(MsgContext);
  return (
    <div>
        <h1> Hi { userAuthData.name } </h1>
        <h2>{ msg }</h2>
        <input type="text" value={ msg } onChange={(e) => setMsg(e.target.value)}/>
    </div>
  )
};

export default Page4;