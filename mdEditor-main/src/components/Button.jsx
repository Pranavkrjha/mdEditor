import React from 'react'
const Button = ({text, isDownload}) => {
  return (
    <button className='bg-orange-700  rounded-lg hover:bg-orange-400 flex justify-between items-center p-2'>
            <span className='mr-1'>
                {`${icon}`}
                </span>
          Download</button>
  )
}

export default Button