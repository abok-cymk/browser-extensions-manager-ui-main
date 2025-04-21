import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);
  return (
    <nav className="flex items-center mb-10 justify-between shadow h-auto w-full bg-neutral-0 px-2 py-2 rounded-lg">
      <a href="/">
        <img src="/logo.svg" alt="logo" className="h-7" />
      </a>
      <button
        onClick={() => setIsToggled(!isToggled)}
        className="bg-neutral-200 rounded-lg p-1 cursor-pointer hover:border-2 hover:border-custom-red-700"
      >
        {isToggled ? <Sun className="text-yellow-600" /> : <Moon />}
      </button>
    </nav>
  );
}

export default Navbar;
