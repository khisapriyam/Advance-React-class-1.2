import React, { useContext } from 'react'
import FoodContext from '../context/foodContext';
import MsgContext from '../context/msgContext'

const Page3 = () => {

    const { msg } = useContext(MsgContext);
    const { sobji } = useContext(FoodContext);

  return (
    <div>
        <ul>
            {
                sobji.map( item => 
                    <li>{ item }</li>
                )
            }
            
        </ul>
    </div>
  )
}

export default Page3