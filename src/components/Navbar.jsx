import React from 'react'
import {appleImg,searchImg,bagImg} from "../utils"
import {navLists} from "../constants"
const Navbar = () => {
  return (
    <header className='w-full px-5 py-5 sm:px-10'>
      <nav className='screen-max-width flex w-full'>
        <img src={appleImg} alt="apple logo" width={14} height={18}/>
        <div className='flex flex-1 justify-center max-sm:hidden'>
            {navLists.map((nav, i) => (
              <div key={i} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                {nav}
              </div> 
            ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
