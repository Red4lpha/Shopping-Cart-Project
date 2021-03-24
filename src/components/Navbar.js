import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({cartCount}) => {
    return (
        <Fragment>
            <nav className="bg-gray-500">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                <div className="flex space-x-4">
                    <div>
                    <Link to='/' className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                        {/* <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin='round' 
                        strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                        </svg> */}
                        <img src="https://cdn.pixabay.com/photo/2012/04/05/01/01/athletic-shoes-25493_960_720.png" 
                        className="h-10 w-10 mr-2"
                        />
                        <span className="font-bold text-3xl">Storage Cart App</span>
                    </Link>
                    </div>
            
                {/*  <!-- primary nav --> */}
                    <div className="hidden md:flex items-center space-x-1 text-2xl mx-2">
                    <NavLink to='/' className="mx-6 border-gray-500 py-1 px-1 text-gray-200 hover:text-gray-900 border-b-2 hover:border-blue-600">Home</NavLink>
                    <NavLink to="/shop" className="mx-6 border-gray-500  py-1 px-1 text-gray-200 hover:text-gray-900 border-b-2 hover:border-blue-600">Shop</NavLink>
                    </div>
                </div>
            
            {/*    <!-- secondary nav --> */}
                <div className="hidden md:flex items-center space-x-1">
                    <NavLink to='/cart' className="flex items-center py-2 px-3 bg-blue-400 hover:bg-blue-300 text-blue-900 hover:text-blue-800 rounded transition duration-300">
                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{cartCount}</span>
                    </NavLink>
                </div>
            
                {/*  <!-- mobile button goes here --> */}
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
            
                </div>
            </div>
            
            {/*  <!-- mobile menu --> */}
            <div className="mobile-menu hidden md:hidden">
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Shop</a>
            </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
