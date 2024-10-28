import React from "react";
import logo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-[#F4F4F4] p-4">
      <div className="flex items-center justify-between px-4 text-white">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-32 w-36 mr-2" />
        </div>
        <div className="flex flex-col mx-4 w-96 justify-center gap-8">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-full bg-[#F4F4F4] text-white border border-gray-700"
          />
        </div>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to={"/"} className="p-2 flex gap-2">
                <FaRegUser />
                <p className="text-[#2F4F38]">Sign In</p>
              </Link>
              <Link to={"/"} className="p-2 flex gap-2">
                <BsCart3 />
                <p className="text-[#2F4F38]">Cart</p>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/"} className="p-2 flex gap-2 items-center">
                <div className="flex rounded-full bg-[#228B22] w-10 h-10 items-center justify-center">
                  <FaRegUser />
                </div>
                <p className="text-[#2F4F38]">Sign In</p>
              </Link>
              <Link to={"/"} className="p-2 flex gap-2 items-center">
                <div className="flex rounded-full bg-[#228B22] w-10 h-10 items-center justify-center">
                  <BsCart3 />
                </div>
                <p className="text-[#2F4F38]">Cart</p>
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-center px-4 w-[100%] gap-10 text-[#2F4F38]">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Product</Link>
        <Link to={"/"}>Health-Resources</Link>
        <Link to={"/"}>About us</Link>
        <Link to={"/"}>Contact us</Link>
      </div>
    </header>
  );
};

export default Header;
