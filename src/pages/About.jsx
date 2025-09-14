import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"About"} text2={"Us"}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod amet quas dignissimos repellendus ipsa impedit accusantium ut, ullam at eaque dolorem repellat similique voluptatibus aliquam suscipit deserunt vel, ipsam nemo!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil eaque cupiditate modi vero sit molestiae voluptatem sunt doloribus sequi, repellat provident nostrum reprehenderit tenetur laudantium commodi facere voluptate! Facere, ratione.</p>
        <b className='text-gray-700'>
          Our Mission
        </b>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae sed eveniet doloremque dignissimos tempora, necessitatibus asperiores harum expedita provident suscipit temporibus, adipisci voluptas ullam dolorum. Aspernatur porro obcaecati accusantium quam.
        </p>

        </div>

      </div>
      <div className="text-4xl py-4 ">
        <Title text1={"Why"} text2={"Choose Us"}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className="border px-10  md:px-16  py-8 sm:py-20 flex flex-col gap-5">
          <b>
            Quality Assurance
          </b>
          <p className='text-gray-700' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum eius porro, iste saepe mollitia dolorum eveniet reprehenderit perferendis quibusdam suscipit, itaque dolores maiores, molestiae blanditiis ullam incidunt quos necessitatibus?
          </p>

        </div>
        <div className="border px-10  md:px-16  py-8 sm:py-20 flex flex-col gap-5">
          <b>
            Convenience
          </b>
          <p className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum eius porro, iste saepe mollitia dolorum eveniet reprehenderit perferendis quibusdam suscipit, itaque dolores maiores, molestiae blanditiis ullam incidunt quos necessitatibus?
          </p>

        </div>
        <div className="border px-10  md:px-16  py-8 sm:py-20 flex flex-col gap-5">
          <b>
            Exceptional Customer Service:
          </b>
          <p className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum eius porro, iste saepe mollitia dolorum eveniet reprehenderit perferendis quibusdam suscipit, itaque dolores maiores, molestiae blanditiis ullam incidunt quos necessitatibus?
          </p>

        </div>

      </div>
      <NewsLetterBox />

    </div>
  )
}

export default About