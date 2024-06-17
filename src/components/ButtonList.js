import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonNames = [
    "Live", "Gaming", "Dance", "Coding", "Comedy", "Study", "Songs",
    "Thriller", "Love", "News", "Cooking", "Cricket", "Horror"
  ];
  return (
    <div className="flex p-2">
    {buttonNames.map((name) => (
      <Button key={name} name={name} />
    ))}
  </div>
  )
}

export default ButtonList
