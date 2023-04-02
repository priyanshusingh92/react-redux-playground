import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list =["All","Music","Mixes","Lives","Cricket","Comedy","Drama","Scenes","Library","Trailers","Auditions","T-Series","Watched","For you"]

  return (
    <div className='my-5 text-sm'>
      {list.map((item, index) => (
        <Button key={index} name={item}/>
      ))}
    </div>
  )
}

export default ButtonList