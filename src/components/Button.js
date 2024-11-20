import React from 'react'

export default function Button({ onClickHandler, title, value }) {
  return <button onClick={onClickHandler} value={value} className='btns'>{title}</button>
}
