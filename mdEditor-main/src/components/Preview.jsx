import React, {useEffect, useState} from 'react'
import Heading from './Heading'
import '../Preview.css' 
const Preview = ({text}) => {
  return (
   <div className = "w-1/2  bg-[#151619] text-white h-full">
    <Heading text='PREVIEW'/>
    <div className='w-full ml-1'>
    <div name="markdown-box" className='bg-transparent w-full h-screen p-4 overflow-hidden prose  prose-invert  text-white' dangerouslySetInnerHTML={{'__html':text}} ></div>
    </div>
    </div>
  )
}

export default Preview