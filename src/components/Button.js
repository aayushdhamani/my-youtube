import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-2 py-1 mx-2 mt-2 bg-gray-300 rounded-lg hover:bg-black hover:text-white'>{name}</button>
    </div>
  )
}

export default Button
