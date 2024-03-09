import React from 'react'
import Link from 'next/link'


const Pages = () => {
  return (
    <>
        <section className="bg-gray-50 h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
                >
                <img
                    className="w-8 h-8 mr-2"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                    alt="logo"
                />
                Bevanté
                </a>
                <div className="w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                    Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                        >
                        Your email
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fau focus:pink block w-full p-2.5 focus:outline-none"
                        placeholder="name@company.com"
                        required=""
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                        >
                        Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fau focus:pink block w-full p-2.5 focus:outline-none"
                        required=""
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                        >
                        Confirm password
                        </label>
                        <input
                        type="confirm-password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fau focus:pink block w-full p-2.5 focus:outline-none"
                        required=""
                        />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                        <input
                            id="terms"
                            aria-describedby="terms"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-fau focus:outline-none "
                            required=""
                        />
                        </div>
                        <div className="ml-3 text-sm">
                        <label
                            htmlFor="terms"
                            className="font-light text-gray-500 "
                        >
                            I accept the{" "}
                            <a
                            className="font-medium text-navy hover:underline "
                            href="#"
                            >
                            Terms and Conditions
                            </a>
                        </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-fau hover:bg-navy focus:ring-4 focus:outline-none focus:ring-pink font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Create an account
                    </button>
                    <p className="text-sm font-semibold text-gray-800 ">
                        Already have an account?{" "}
                        <Link
                        href="/accounts/sign-in"
                        className="font-medium text-navy hover:underline"
                        >
                        Login here
                        </Link>
                    </p>
                    </form>
                </div>
                </div>
            </div>
        </section>
 
    </>
  )
}

export default Pages