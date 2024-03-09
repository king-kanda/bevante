import { Bestselers, Product } from '@/components'
import React from 'react'

const page = () => {
  return (
    <>
    {/* breadcrumps */}
    <section className=" py-6 px-4 breadcrumps border-b border-gray-500">
        <h6 className="container text-gray-700 text-semibold text-sm">
            Categories / Hijabs /
            <span className='text-navy text-semibold mx-1'>
                Product Name
            </span>
        </h6>
    </section>
    {/* product detail section */}
    <section className='Product-details-component'>
        <Product/>
    </section>
    <section className="bestsellers container p-6">
        <div className="tt">
            <h3 className='text-sm font-bold'>
                BestSellers
            </h3>
        </div>
       <section className="container px-12 mx-auto">
            <Bestselers/>
       </section>
    </section>
    </>
  )
}

export default page