import { useState } from 'react'

import about from '../../assets/about.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import javaScript from '../../assets/javaScript.svg'
import react from '../../assets/react.svg'
import sass from '../../assets/sass.svg'
import bootstrap from '../../assets/bootstrap.svg'
import tailwind  from '../../assets/tailwind.svg'

const About = () => {

  const textContent = {
    title: 'About Me',
    mySkills: 'Skills',
    myExperience: 'Experiences',
    myEducation: 'Education',
    description: "Hello there! I am a self taught Web Developer. I started coding since December 2022. I am passionate about creating beautiful, responsive websites and I am always looking to stay up to date with the latest web development trends and technologies. When I'm not coding, I'm playing games and reading manhua or manga."
  }

  const skills = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: javaScript },
    { name: 'ReactJs', icon: react },
    { name: 'Sass', icon: sass },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'Tailwind', icon: tailwind },
  ]
  
  const currentYear = new Date().getFullYear()
  const prevYear = currentYear - 1
  const getYear = (year) => {
    if (year === currentYear) {
      return 'Current';
    }
    return year;
  };
  
  const experiences = [
    { year: getYear(currentYear), job: 'KodeGo Bootcamp' },
    { year: prevYear, job: 'Self-taught Web Developer' },
  ]
  const education = [
    { year: prevYear, education: 'Senior HS. Graduate at Cat College Ligao' }
  ]

  const sharedLayoutStyle = 'w-full h-[360px] md:h-80 shadow-md shadow-gray-500 rounded-md m-auto mb-9 p-4'
  const sharedHeadingStyle = 'text-center text-xl relative after:content-[""] after:w-8 after:h-[2px] after:bg-indigo-500 after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-2px] mb-6'

  return (
    <section>
      <div className='max-w-7xl mx-auto m-10 p-4 sm:p-6 lg:grid lg:grid-cols-2 relative'>
        <div>
          <img className='w-11/12 sm:w-7/12 m-auto lg:w-full lg:sticky top-4' src={about} alt="" />
        </div>
        <div>
          <div className="py-4 lg:p-4">
            <h1 className="text-4xl font-bold text-indigo-500 mb-2">{textContent.title}</h1>
            <p className="leading-7 mb-6">{textContent.description}</p>
          </div>

          <div className='max-w-lg m-auto px-4 '>
            <div className={`${sharedLayoutStyle} `}>
              <h1 className={`${sharedHeadingStyle}`}>{textContent.mySkills}</h1>
              <div className='grid grid-cols-3 gap-2 md:grid-cols-4'>
                {
                  skills.map((skill) => {
                    return (
                      <div key={skill.name} className='flex flex-col justify-center items-center p-2'>
                        <img src={skill.icon} alt={skill.name} className='w-10 h-10' />
                        <p className='text-sm pt-2'>{skill.name}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className={`${sharedLayoutStyle}`}>
              <h1 className={`${sharedHeadingStyle}`}>{textContent.myExperience}</h1>
              <ul>
                {
                  experiences.map((exp) => {
                    return (
                      <li key={exp.year} className='py-3'>
                        <span className='block text-sm text-indigo-500'>{exp.year}</span>
                        {exp.job}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className={`${sharedLayoutStyle}`}>
              <h1 className={`${sharedHeadingStyle}`}>{textContent.myEducation}</h1>
              <ul>
                {
                  education.map((education) => {
                    return (
                      <li key={education.year} className='py-3'>
                        <span className='block text-sm text-indigo-500'>{education.year}</span>
                        {education.education}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
