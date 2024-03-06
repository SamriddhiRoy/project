import React from 'react';

const Header = () => {
  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex-1 text-center">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        </div>
        <div className="flex-1 text-right">
          <div className="border-white border rounded p-2 inline-block">
            <ul className="list-none ">
              <li className="inline-block ml-4"><a href="#" className="text-white text-sm">Advertising</a></li>
              <li className="inline-block ml-4"><a href="#" className="text-white text-sm">Short Films</a></li>
              <li className="inline-block ml-4"><a href="#" className="text-white text-sm">Commercial Photography</a></li>
              <li className="inline-block ml-4"><a href="#" className="text-white text-sm">Portraits</a></li>
              <li className="inline-block ml-4"><a href="#" className="text-white text-sm">Still Life</a></li>
              <li className="inline-block ml-4"><a href="#" className="text-white text-sm">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
