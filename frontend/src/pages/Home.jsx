import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import NewArrivals from './NewArrivals'
const Home = () => {
    return (
        <div className='w-full'>
           <Hero/>
           
           <NewArrivals/>

            {/* Features Section */}
            <div className='bg-gray-50 py-16 px-6 rounded-lg'>
                <h2 className='text-3xl font-bold mb-12 text-center'>Why Choose Us?</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='text-center'>
                        <div className='text-4xl mb-4'>🚚</div>
                        <h3 className='font-bold text-lg mb-2'>Free Shipping</h3>
                        <p className='text-gray-600'>Free shipping on all orders over $50</p>
                    </div>
                    <div className='text-center'>
                        <div className='text-4xl mb-4'>💳</div>
                        <h3 className='font-bold text-lg mb-2'>Secure Payment</h3>
                        <p className='text-gray-600'>100% secure payment methods</p>
                    </div>
                    <div className='text-center'>
                        <div className='text-4xl mb-4'>↩️</div>
                        <h3 className='font-bold text-lg mb-2'>Easy Returns</h3>
                        <p className='text-gray-600'>30-day money-back guarantee</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className='mt-16 text-center'>
                <h2 className='text-2xl font-bold mb-4'>Ready to Shop?</h2>
                <Link 
                    to="/collection" 
                    className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition'
                >
                    Browse Collection
                </Link>
            </div>
        </div>
    )
}

export default Home
