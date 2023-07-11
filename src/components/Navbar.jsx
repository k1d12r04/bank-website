import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => setToggleMenu(prevState => !prevState);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px] " />

      <ul className="list-none hidden sm:flex  justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex sm:hidden flex-1 justify-end items-center">
        <img
          onClick={toggleMenuHandler}
          src={toggleMenu ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        />
        <div
          className={`${
            toggleMenu ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col  justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                onClick={toggleMenuHandler}
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                } `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
