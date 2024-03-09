import React from 'react'
import Link from 'next/link'
import { FaUser ,FaRegEnvelopeOpen ,FaAddressBook ,FaPowerOff ,FaTrash} from "react-icons/fa";
import { BsBox2Fill } from "react-icons/bs";
import { BsFillBox2HeartFill } from "react-icons/bs";

const Sidenav = () => {
  return (
    <>
    {/* add to layout componet */}
    
        {/* component */}
        <div className={`  flex flex-col flex-auto flex-shrink-0 antisaliased `}>
            <div className="flex flex-col top-0 left-0 w-64  h-screen border-r ">
                <div className="mb-2 p-4">
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
                    
                </h5>
                </div>
                <nav className="flex flex-col gap-1  p-2 font-sans text-base font-normal text-gray-700">
                <div
                    role="button"
                    tabIndex={0}
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                    <div className="grid place-items-center mr-4">
                        <span>
                            <FaUser />
                        </span>
                    </div>
                    My account 
                </div>
                <div
                    role="button"
                    tabIndex={0}
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                    <div className="grid place-items-center mr-4">
                        <span>
                            <BsBox2Fill />
                        </span>
                    </div>
                    Orders
                </div>
                <div
                    role="button"
                    tabIndex={0}
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                    <div className="grid place-items-center mr-4">
                        <span>
                            <FaRegEnvelopeOpen />
                        </span>
                    </div>
                    Inbox{" "}
                    <div className="grid place-items-center ml-auto justify-self-end">
                    <div
                        className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full"
                        style={{ opacity: 1 }}
                    >
                        <span className=" text-xs">14</span>
                    </div>
                    </div>
                </div>
                <div
                    role="button"
                    tabIndex={0}
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                    <div className="grid place-items-center mr-4">
                        <span>
                            <BsFillBox2HeartFill />
                        </span>
                    </div>
                    Saved Items
                </div>
                <div
                    role="button"
                    tabIndex={0}
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                    <div className="grid place-items-center mr-4">
                        <span>
                            <FaAddressBook />
                        </span>
                    </div>
                    Address Book
                </div>
                <div
                    role="button"
                    tabIndex={0}
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                    <div className="grid place-items-center mr-4">
                        <span>
                            <FaPowerOff />
                        </span>
                    </div>
                    Log Out
                </div>
                <div
                    role="button"
                    tabIndex={0}
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all bg-red text-white"
                >
                    <div className="grid place-items-center mr-4">
                        <span className='text-white'>
                            <FaTrash />
                        </span>
                    </div>
                    Close Account
                </div>
                </nav>
            </div>
        </div>
       
    </>
  )
}

export default Sidenav