import { OrderSummary, Shipping } from '@/components'
import React from 'react'



const Page = () => {
  return (
    <>
    <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      <a href="#" className="text-2xl font-bold text-gray-800">
        Check Out
      </a>
      <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        <div className="relative">
          <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <a
                className="flex h-6 w-6 items-center justify-center rounded-full bg-pink text-xs font-semibold text-emerald-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </a>
              <span className="font-semibold text-gray-900">Shop</span>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <a
                className="flex h-6 w-6 items-center justify-center rounded-full bg-pink text-xs font-semibold text-black ring ring-teal ring-offset-2"
                href="#"
              >
                2
              </a>
              <span className="font-semibold text-gray-900">Shipping</span>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <a
                className="flex h-6 w-6 items-center justify-center rounded-full bg-pink text-xs font-semibold text-black"
                href="#"
              >
                3
              </a>
              <span className="font-semibold text-gray-500">Payment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 gap-6">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-700">
            Check your items. And select a suitable shipping method.
          </p>

          {/* order summary styles .mapppp */}
          <OrderSummary/>

          <div className="mt-8 space-y-3 rounded-lg border border-gray-400 bg-white px-2 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="subtotal">
                  <p className='text-sm text-gray-700'>
                    Subtotal
                  </p>
              </div>
              <div className="amount">
                  <p className='text-sm text-gray-900 font-bold'>
                    Ksh 600
                  </p>
              </div>
            </div>
            {/* shipping cost */}
            <div className="flex items-center justify-between mt-5">
              <div className="subtotal">
                  <p className='text-sm text-gray-700'>
                    Shipping
                  </p>
              </div>
              <div className="amount">
                  <p className='text-sm text-gray-900 font-bold'>
                    Ksh 300
                  </p>
              </div>
            </div>

            {/* Grant Total */}
            <div className="flex items-center justify-between mt-5">
              <div className="subtotal">
                  <p className='text-sm text-gray-900 text-bold'>
                    Total
                  </p>
              </div>
              <div className="amount">
                  <p className='text-sm text-gray-900 font-bold'>
                    Ksh 900
                  </p>
              </div>
            </div>
            
            
          </div>

      
        </div>
        <section>
          
            {/* or route generation for the user */}
            <Shipping/>
        </section>
    </div>
  </>
  
  )
}

export default Page