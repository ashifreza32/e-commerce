import { assets } from '../assets/assets.js'
import Title from '../components/Title'
import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className='border-t pt-10'>
            {/* Page Header */}
            <div className='text-center py-8 text-3xl'>
                <Title text1={'CONTACT'} text2={'US'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    We'd love to hear from you! Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            {/* Contact Section */}
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                {/* Store Information */}
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                    <div className='text-gray-500'>
                        <p>54709 Willms Station</p>
                        <p>Suite 350, Washington, USA</p>
                    </div>
                    <div className='text-gray-500'>
                        <p>Tel: (415) 555-0132</p>
                        <p>Email: admin@forever.com</p>
                    </div>
                    <div className='text-gray-500'>
                        <p>Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>

                {/* Contact Image */}
                <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Us" />
            </div>

            {/* Contact Form */}
            <div className='my-10'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6 max-w-md mx-auto'>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder="your.email@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder="Your message here..."
                        />
                    </div>
                    <button
                        type="submit"
                        className='bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition duration-200'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
