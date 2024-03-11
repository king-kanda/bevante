"use client"

import React , {useState , useEffect} from 'react'
import { BsHeart , BsCart3 } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItems } from '@/utils/cartSlice'; 
import { addWishList, removeWishList } from '@/utils/wishSlice'; 



  export default function ProductGrid() {


    const [products , setProducts] = useState([])

    useEffect(() => { 
      const fetchProducts = async() =>{
          try{
            fetch('https://fakestoreapi.com/products',{ cache: 'force-cache' })
            .then(res=>res.json())
            .then(json=>setProducts(json))
          }catch(error){
            console.log("erorr fetching data:", error)
          }
      }
        
      fetchProducts()  
            
    }, []) 
 
    const cartItems = useSelector(state => state.cart);
    const wishlistItems = useSelector(state => state.wishList); // Assuming you have a wishlist slice

    console.log(cartItems)
    console.log(wishlistItems)

    const dispatch = useDispatch();

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Arrivals</h2>
          
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.description}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 
                    
                    className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolQzute inset-0" />
                        Ksh {product.title}
                      </a>
                    </h3>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                 
                </div>
                <div className="mt-4 flex justify-between"> 
                                        {cartItems.some(items => items.id === product.id) ? (
                                            <button
                                                className='inline-flex justify-between items-center bg-pink text-white p-2 '
                                                onClick={() => dispatch(removeItems(product.id))}
                                            >
                                                <p className='mx-2'>Remove from cart</p>
                                                <span>
                                                    <BsCart3 />
                                                </span>
                                            </button>
                                        ) : (
                                            <button
                                                className='inline-flex justify-between items-center bg-white border border-pink text-pink p-2 '
                                                onClick={() => dispatch(addItem(product))}
                                            >
                                                <p className='mx-2'>Add to cart</p>
                                                <span>
                                                    <BsCart3 />
                                                </span>
                                            </button>
                                        )}
                                    
                                    {wishlistItems.some(item => item.id === product.id) ? (
                                        <button
                                            className="text-white bg-fau px-2 py-2 "
                                            onClick={() => dispatch(removeWishList(product.id))}
                                        >
                                            <span className="text-white">
                                            <BsHeart />
                                            </span>
                                        </button>
                                        ) : (
                                        <button
                                            className="text-white bg-fau px-2 py-2"
                                            onClick={() => dispatch(addWishList(product))}
                                        >
                                            <span className="text-white">
                                            <BsHeart />
                                            </span>
                                        </button>
                                        )}
                                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  7