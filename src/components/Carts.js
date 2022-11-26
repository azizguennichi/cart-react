import React from 'react'
import { TbAdjustmentsAlt } from "react-icons/tb";
import { GiLayeredArmor } from "react-icons/gi";
import { AiOutlineFileProtect } from "react-icons/ai";
import Home from './Home';


const Carts = () => {
  return (
    <>
    <Home />
    <div className='flex justify-between bg-slate-900'>
        <div className=" w-full max-w-md p-4 bg-slate-900 border rounded-lg shadow-md sm:p-8 dark:bg-slate-900 dark:border-gray-900">
        <TbAdjustmentsAlt size={50}/>
    <div className="flex items-center justify-between mb-4">
        
        <h5 className="text-xl font-bold leading-none text-gray-200 dark:text-white">Easy Management</h5>
       
   </div>
   <div className="flex items-center space-x-4">
   <div className="flow-root">
        <ul  className="divide-y text-gray-200 divide-gray-900 dark:divide-gray-200">
            <li className="py-3 sm:py-4">
            Install Mods and Plugins easily
            </li>
            <li className="py-3 sm:py-4">
            Share access and manage servers together
            </li>
            <li className="py-3 sm:py-4">
            Convenient support in several languages via email, phone and chat
            </li>
            </ul>
                 
    </div>
    
    </div>
    </div>
    <div className="w-full max-w-md p-4 bg-slate-900 border rounded-lg shadow-md sm:p-8 dark:bg-slate-900 dark:border-slate-900">
        <GiLayeredArmor size={50}/>
    <div className="flex items-center justify-between mb-4">
        
        <h5 className="text-xl font-bold leading-none text-gray-200 dark:text-white">High Reliability</h5>
       
   </div>
   <div className="flex items-center space-x-4">
   <div className="flow-root">
        <ul  className="divide-y text-gray-200 divide-gray-900 dark:divide-gray-900">
            <li className="py-3 sm:py-4">
            Lowest pings due to shortest internet routes

            </li>
            <li className="py-3 sm:py-4">
            Daily backups + DDoS protection
            </li>
            <li className="py-3 sm:py-4">
            Own high-quality, fail-safe server hardware            </li>
            </ul>
                 
    </div>
    
    </div>
    </div>
    <div className="w-full max-w-md p-4 bg-slate-900 border rounded-lg shadow-md sm:p-8 dark:bg-slate-900 dark:border-slate-900">
        <AiOutlineFileProtect size={50}/>
    <div className="flex items-center justify-between mb-10 ">
        
        <h5 className="text-xl font-bold leading-none text-gray-200 dark:text-white">Easy Management</h5>
       
   </div>
   <div className="flex items-center space-x-4">
   <div className="flow-root">
        <ul  className="divide-y text-gray-200 divide-gray-900 dark:text-white">
            <li className="py-3 sm:py-4">
            Install Mods and Plugins easily
            </li>
            <li className="py-3 sm:py-4">
            Share access and manage servers together
            </li>
            <li className="py-3 sm:py-4">
            Convenient support in several languages via email, phone and chat
            </li>
            </ul>
                 
    </div>
    
    </div>
    </div>

    </div>
    </>
    
  )
}

export default Carts