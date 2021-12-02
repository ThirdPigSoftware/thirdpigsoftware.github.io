import React from 'react'
import CloudsAnim from './clouds.svg'

function Clouds ({ flip, id }) {
  return (
    <div
      id={id}
      className='clouds -mt-2'
      style={flip ? { transform: 'rotate(180deg)', marginTop: -10 } : {}}
    >
      <CloudsAnim />
    </div>
  )
}

export default Clouds
