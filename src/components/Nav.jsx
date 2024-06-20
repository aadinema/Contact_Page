import React from "react";

function Nav() {
  return (
    <>
      <nav className="flex justify-between h-20 p-2 items-center text-white font-serif text-xl uppercase font-extrabold
      hover:animate-bounce transition duration-500 ease-in-out hover:p-20">
        <div>
          <h1 className=" p-3 border-2 rounded-full bg-teal-950 ">
            contact form
          </h1>
        </div>
       
        <div>
          <ul className="flex justify-center items-center gap-5 mr-5">
            <li className=" hover:bg-orange-600">
              <a href="">home</a>
            </li>
            <li className=" hover:bg-orange-600">
              <a href="">about</a>
            </li>
          </ul>
        </div>
      </nav>
       
    </>
  );
}

export default Nav;
