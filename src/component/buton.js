import React from 'react'
import './buton.css'
function Buton({data}) {
  const click3 =()=>{
    alert(data.name+'\n'+ data.description)
}
function click1(data1){
    alert(data1)
}

  return (
    <div className='butonClick'>
        <buton className='btn btn-warning' onClick={()=>click1(data.name+'\n'+ data.description)}>Click Me1</buton>
        <buton className='btn btn-warning'>Click Me2</buton>
        <buton className='btn btn-warning' onClick={click3}>Click Me3</buton>
    </div>
  )
}

export default Buton