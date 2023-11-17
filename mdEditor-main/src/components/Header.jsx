import React from 'react'
import {ImBin} from 'react-icons/im'
import {FiDownload} from 'react-icons/fi'
import {AiOutlineSave} from 'react-icons/ai'
const Header = ({downloadHandler, saveHandler,deleteHandler }) => {
  return (
    <div className='sm:flex md:flex lg:flex-wrap  justify-between  bg-[#343A40] text-white items-center py-2'>
        <h1 className='left tracking-widest font-sans font-semibold ml-3 text-xl'>MARKDOWN</h1>
        <div className='right flex  justify-around py-2 px-2 w-1/4 items-center gap-2'>
          <button className='' onClick={deleteHandler}><ImBin/></button>
          <button className='bg-orange-600  rounded-md hover:bg-orange-400 flex justify-between items-center p-2' onClick={downloadHandler}>
            <span className='mr-1'><FiDownload/></span>
          Download</button>
          <button className='bg-orange-600  rounded-md hover:bg-orange-400 flex justify-between items-center p-2' onClick={saveHandler}>
            <span className='mr-1'><AiOutlineSave/></span>
          Save
          </button>
        </div>
    </div>


  )
}

export default Header