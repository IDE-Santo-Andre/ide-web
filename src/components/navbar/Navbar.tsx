import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-slate-800 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="" 
            alt="" 
            className=""
          />
          <h1 className="text-xl font-bold">IDE Santo André</h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 text-lg">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Sobre</a>
          <a href="#" className="hover:underline">Seja Voluntário</a>
          <a href="#" className="hover:underline">Igrejas</a>
          <a href="#" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;