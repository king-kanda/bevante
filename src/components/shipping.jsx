'use client'

import React, { useState } from 'react';

const Shipping = () => {


    const counties = [
        'Nairobi',
        'Mombasa',
        'Kisumu',
        // Add more counties as needed
      ];


    const regions = {
        nairobi: ['Eastlands', 'Westlands', 'CBD'],
        mombasa: ['Coastal Area', 'Suburbs'],
        kisumu: ['Urban', 'Suburban'],
        // Add more regions as needed
      };


    const [selectedCounty, setSelectedCounty] = useState('nairobi');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
      const handleCountyChange = (e) => {
    
        setSelectedCounty(e.target.value);
        // Set the default region for the selected county
        setSelectedRegion(regions[countyValue][0]);
      };
    
      const handleRegionChange = (e) => {
        // Handle region change logic here
        setSelectedRegion(e.target.value);
      };

  return (
            <>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Shipping Details</p>
                    <p className="text-gray-600 text-sm">
                    Complete your order 
                    </p>
                    <form action="">

                        {/* shiiping form section */}
                        <div className={` shipping-form `}>
                            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                                Contact
                            </label>
                            <div className="relative">
                                <input
                                type="text"
                                id="email"
                                name="email"
                                className="w-full rounded-md border border-gray-400 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 ocus:border-blue focus:ring focus:ring-teal focus:border-blue  focus:outline-none"
                                placeholder="your.email@gmail.com"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                                </div>
                            </div>

                            {/* shiiping address details */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="county-region">
                                    <label
                                        htmlFor="card-holder"
                                        className="mt-4 mb-2 block text-sm font-medium"
                                    >
                                        County/Region
                                    </label>
                                    <div className="relative">
                                    
                                    <select 
                                        id="county" 
                                        name="county" 
                                        className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:border-blue focus:ring focus:ring-teal focus:border-blue  focus:outline-none"
                                        value={selectedCounty}
                                        onChange={handleCountyChange}
                                    >
                                        {counties.map((county) => (
                                            <option key={county} value={county.toLowerCase()}>
                                                {county}
                                            </option>
                                        ))}
                                    </select>
                                    </div>
                                </div>

                                <div className="region">
                                    <div className="mb-4">
                                        <label htmlFor="region" className="mt-4 mb-2 block text-sm font-medium">
                                            Select your region:
                                        </label>
                                        <select
                                            id="region"
                                            name="region"
                                            className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:border-blue focus:ring focus:ring-teal focus:border-blue  focus:outline-none"
                                            value={selectedRegion}
                                            onChange={handleRegionChange}
                                        >
                                            {regions[selectedCounty].map((region) => (
                                            <option key={region} value={region.toLowerCase()}>
                                                {region}
                                            </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                          
                        </div>


                        {/*  contact infromation section  */}
                        <div className="contact-form">
                            <div className="grid grid-cols-2 gap-4">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
                                    First Name:
                                    </label>
                                    <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:border-blue focus:ring focus:ring-teal focus:border-blue  focus:outline-none"
                                    value={firstName}
                                    placeholder='First Name'
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
                                    Last Name:
                                    </label>
                                    <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:border-blue focus:ring focus:ring-teal focus:border-blue  focus:outline-none"
                                    value={lastName}
                                    placeholder='Last Name'
                                    onChange={(e)=>setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            
                        </div>

                        {/* Shipping Methods */}
                        <div className="shiiping-methods">
                            {/* this depends on the users input  */}
                        </div>

                        {/* btn section */}
                        <button className="mt-4 mb-8 w-full rounded-md bg-navy px-6 py-3 font-medium text-white">
                        Place Order
                        </button>

                    </form>
                </div>
            </>
  )
}

export default Shipping