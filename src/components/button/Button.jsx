import React from 'react'
import './button.css'

function Button({text, cv, url=''}) {
  return (
    <div>
      <button className='btn'>
        <a href={url} download={cv? true: false}>{text}</a>
      </button>
    </div>
  );
}

export default Button
