import React from 'react'
import styles from "@/styles/products.module.scss"

const ProductImage = () => {
  return (
    <>
        <div className="flex items-start gap-2">
            <div className="basis-1/4 4s">
                <div className="flex flex-col gap-4">
                    <div className={` ${styles.sideImg} `}>
                        <img
                            alt="ecommerce"
                            className={` ${styles.SideImage} rounded-sm lg:w-1/2 w-full object-cover object-center`}
                            src="/product.png"
                        />
                    </div>
                    <div className={` ${styles.sideImg} `}>
                        <img
                            alt="ecommerce"
                            className={` ${styles.SideImage} rounded-sm lg:w-1/2 w-full object-cover object-center`}
                            src="/product.png"
                        />
                    </div>
                    <div className={` ${styles.sideImg} `}>
                        <img
                            alt="ecommerce"
                            className={` ${styles.SideImage} rounded-sm lg:w-1/2 w-full object-cover object-center`}
                            src="/product.png"
                        />
                    </div>
                </div>
            </div>
            <div className="basis-3/4">
                <img
                    alt="ecommerce"
                    className={` ${styles.MainImage} lg:w-1/2 w-full object-cover object-center`}
                    src="/product.png"
                />
            </div>
        </div>
         
    </>
  )
}

export default ProductImage