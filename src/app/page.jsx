import React from  'react'
import styles from '@/styles/home.module.scss'
import { Open_Sans } from 'next/font/google';
import { Croissant_One } from 'next/font/google';
import { NewsLetter, ProductGrid } from '@/components';

// Load Open Sans variable font
const openSans = Open_Sans({ subsets: ['latin'] });

// Load Croissant One (local) - Adjust the path if needed
const croissantOne = Croissant_One({ 
  weight: '400',
subsets: ['latin'],}
);

export default function MyPage() {
  return (
    <>
      <section className={` hero section ${styles.heroContainer} p-6`}>
        <div className="hero-content container">
          {/* this is more of a flex grid container wiht one side darker that the other */}
          <div className="text-section flex items-center justify-start px-12">
            <div className="divText-holder">
              <h1 className={` font-bold text-4xl ${croissantOne.className} `}>
                  Where Sweet
                  <br />
                   Moments Blossom!
              </h1>
              <p className={` w-1/3 text-sm  ${openSans.className} my-3`}>
                  Step into Bevante's enchanting world, where sweetness dances with elegance. Our haven is filled with a variety of delightful candies, charming flowers, and carefully selected packaged gifts.
              </p>
              <div className='my-4'>
                <button className={ ` ${openSans.className}  bg-pink px-4 py-2 text-white  ` }>
                    Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us section begins */}
      <section className='flex items-center justify-center bg-teal'>
          <div className="about-us container px-8  py-12">
            <h1 className={` ${croissantOne.className} text-center text-4xl `}>
              Your Enchanted Haven!
            </h1>
            <div className="flex items-center justify-center">
              <p className={`  ${openSans.className} w-1/2 text-sm text-center my-4`}>
              Explore our world of delightful candies, charming flowers, carefully curated gifts, and stylish hijabs. We blend sweetness with elegance to offer you a unique and inclusive shopping experience. Discover the perfect combination of treats, beauty, and fashion at Bevante – your go-to destination for creating memorable moments. Shop now and let the enchantment begin!
              </p>
            </div>
           
          </div>
      </section>
      {/* new arrivals */}
      <ProductGrid/>

      {/* viewed moslty */}


      {/* recently viewwed */}

      {/* newsletter */}
      <NewsLetter/>
    </>
  );
}