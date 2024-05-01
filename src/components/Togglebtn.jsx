import React from 'react';
import { MdOutlineWbSunny, MdSunny } from 'react-icons/md';
import { useTheme } from '../ThemeContext';

function ToggleBtn() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {theme === 'light' ? (
        <button 
          className='sun'
          onClick={toggleTheme}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}
        >
          <MdOutlineWbSunny size={30} />
        </button>
      ) : (
        <button
          className='sun-dark'
          onClick={toggleTheme}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}
        >
          <MdSunny size={30} />
        </button>
      )}
    </>
  );
}

export default ToggleBtn;
