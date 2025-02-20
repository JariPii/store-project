import { BsCart, BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/users/userSlice';

// const themes = {
//   winter: 'winter',
//   dracula: 'dracula',
// };

// const getThemeFromLocalstorage = () => {
//   return localStorage.getItem('theme') || themes.winter;
// };

const Navbar = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
    // const { winter, dracula } = themes;
    // const newTheme = theme === winter ? dracula : winter;
    // setTheme(newTheme);
    dispatch(toggleTheme());
  };

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          {/*  TITLE */}
          <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl'>
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* THEME SETUP */}
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            {/* SUN ICON */}
            <BsSunFill className='swap-on h-4 w-4' />
            {/* MOON ICON */}
            <BsMoonFill className='swap-off h-4 w-4' />
          </label>
          {/* CARTLINK */}
          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
