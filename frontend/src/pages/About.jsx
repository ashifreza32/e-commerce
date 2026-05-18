import Title from '../components/Title'
import { assets } from "../assets/assets"


const About = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center gap-10 my-10'>
                <Title title={"About"} text1={'about'} text2={'US'}/>
                </div>

                <div className='w-3/4 m-auto text-center text-gray-600 text-sm md:text-base'>
                <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="About Us" />
                <p className='my-6'>Welcome to Forever, your number one source for all things fashion. We're dedicated to giving you the very best of clothing, with a focus on quality, customer service, and uniqueness.</p>
                <p className='my-6'>Founded in 2024 by John Doe, Forever has come a long way from its beginnings. When John first started out, his passion for fashion drove him to start his own business.</p>
                <p className='my-6'>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                <p className='my-6'>Sincerely,<br/>John Doe</p>
                </div>
            
        </div>
    )
}

export default About
 