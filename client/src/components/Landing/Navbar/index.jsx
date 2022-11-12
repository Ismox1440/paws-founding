import logo from './logo.png'
import './nav-index.css'

const Navbar = () => {

  return (
    <nav className="flex justify-between px-10 py-5 items-center w-full">
    
      <div className="flex ml-5">
        <h1 className="flex flex-row font-bold lg:text-[2rem] text-[#3D190C]">Paws</h1>
        <h1 className="flex flex-row font-bold lg:text-[2rem] text-[#CA7C62]">Founding</h1>
      </div>


      <div className="flex items-center">
        <div className="flex items-center mr-20">
          <a className="font-bold mx-7 text-[#3D190C] link-underline link-underline-black lg:text-[1.2rem]" href="/about">About Us</a>
          <a className="font-bold mx-7 text-[#3D190C] link-underline link-underline-black lg:text-[1.2rem]" href="/#">Contact</a>
        </div>
      </div>

      <div>
        <img className="w-12 h-12" src={logo} alt="LOGO" />
      </div>
    </nav>
  );
};

export default Navbar;
