import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen) 
    const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen)

    return (
        <nav className='flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 bg-white shadow-md sticky top-0 z-50'>
            {/* Logo */}
            <Link to="/" className='flex items-center'>
                <img src={assets.logo} alt="Logo" className='h-8 w-auto' />
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
                <Link to="/" className='text-gray-700 hover:text-blue-600 font-medium transition'>
                    Home
                </Link>
                <Link to="/collection" className='text-gray-700 hover:text-blue-600 font-medium transition'>
                    Collection
                </Link>
                <Link to="/about" className='text-gray-700 hover:text-blue-600 font-medium transition'>
                    About
                </Link>
                <Link to="/contact" className='text-gray-700 hover:text-blue-600 font-medium transition'>
                    Contact
                </Link>
            </div>

            {/* Right side icons and auth */}
            <div className='flex items-center space-x-4'>
                {/* Search Bar */}
                <div className='hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-2'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='bg-transparent outline-none text-sm w-32 text-gray-700'
                    />
                    <svg className='w-5 h-5 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                    </svg>
                </div>

                {/* Cart Icon */}
                <Link to="/cart" className='relative hover:text-blue-600 transition'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>0</span>
                </Link>

                {/* User Menu */}
                <div className='relative'>
                    <button
                        onClick={toggleUserMenu}
                        className='hover:text-blue-600 transition'
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                        </svg>
                    </button>

                    {/* User Dropdown */}
                    {isUserMenuOpen && (
                        <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20'>
                            <Link to="/dashboards" className='block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg'>
                                Dashboard
                            </Link>
                            <Link to="/order" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                                My Orders
                            </Link>
                            <Link to="/login" className='block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg border-t'>
                                Login
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className='md:hidden text-gray-700 hover:text-blue-600 transition'
                >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className='absolute top-full left-0 right-0 bg-white shadow-lg md:hidden'>
                    <div className='flex flex-col space-y-2 px-4 py-3'>
                        <Link to="/" className='text-gray-700 hover:text-blue-600 font-medium py-2'>
                            Home
                        </Link>
                        <Link to="/collection" className='text-gray-700 hover:text-blue-600 font-medium py-2'>
                            Collection
                        </Link>
                        <Link to="/about" className='text-gray-700 hover:text-blue-600 font-medium py-2'>
                            About
                        </Link>
                        <Link to="/contact" className='text-gray-700 hover:text-blue-600 font-medium py-2'>
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
