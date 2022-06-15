import {useState} from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose} from 'react-icons/ai';

import logo from '../../images/logo.png';

const Navbar = () =>{
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <nav className='w-full flex md:justify-center justify-between items-center'>
            <div className='md-flex-[0.5] flex-initial justify-center items-center'>
              <a href='http://localhost:3000/'>
                  <img src={logo} alt="logo" className='w-32 cursor-pointer' />
              </a>
            </div>  
        </nav>
    );
}

export default Navbar;