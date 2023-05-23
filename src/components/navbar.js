import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  // function mode() {

  // }
  return (
    <nav className={`flex justify-between px-10 max-[426px]:px-5 py-4 text-${(props.mode === 'white') ? 'black' : 'white'} bg-[${(props.mode === 'white') ? '#ffffd8' : '#003865'}]`} style={{ backgroundColor: (props.mode === 'white') ? '#ededed' : '#003865' }}>
      <div className="logo font-bold text-3xl">{props.title}</div>
      <ul className=' flex gap-20 items-center max-[426px]:hidden'>
        <li className='text-xl font-medium cursor-pointer hover:text-sky-600 transition-colors'><Link to="/">Home</Link></li>
        <li className='text-xl font-medium cursor-pointer hover:text-sky-600 transition-colors'><Link to="/about">About</Link></li>
        {/* <li className='text-xl font-medium cursor-pointer hover:text-sky-600 transition-colors'><a href="/">Contact</a>Contact</li> */}
      </ul>
      <div className='flex gap-14'>
        <div className="flex items-center cursor-pointer">
          <div className="mode mr-3">Dark Mode</div>
          <div class="relative" onClick={props.toggleMode}>
            <div class="toggle__line w-12 h-6 bg-gray-400 rounded-full shadow-inner"></div>
            <div class="toggle__dot absolute w-6 h-6 bg-black rounded-full bottom-0 left-0" style={{ transition: 'all .4s;' }}></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = { title: PropTypes.string }
Navbar.defaultProps = { title: 'set title' }
