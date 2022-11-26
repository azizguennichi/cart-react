import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons ";
import { Icons } from "./Menus";

const Bfooter = () => {
  return (
    <>
  <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-900 py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
           Rent Squad <span className="text-teal-400">Server</span>
        </h1>

      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
    </>
  );
};

export default Bfooter;
