
import React, { useState } from 'react'




const hooks = () => {

  const [ inputq, setInputq ] = useState(0);

  const incrementive = () =>{
    setInputq(inputq+1)
}
const deincrementive = () =>{
    setInputq(inputq-1)
}

       

  return (
       <div>
        <h3>Use to myyy</h3>
       <div>
        <button type='submit'  onClick={() => deincrementive(+1)}>sum-

        </button>
         <input type='text' id="inputq" value={inputq}/>
         <button type='submit' onClick={() => incrementive(-1)}>submit

         </button>
       </div>
        </div>


  )
}
export default hooks