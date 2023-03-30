import Button from '../Button'
import banner from '../../assets/banner.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faDownload } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  const textContent = {name: 'ALBERTO', myGreetings: 'Hi! I\'m', myMessage: 'As a full-stack web developer, I have the skills and knowledge to build beautiful and functional websites and applications.'}
  const sharedButtonStyles = 'font-medium mt-4 block mx-auto text-center w-32 rounded-md py-2 border duration-200 ease-in-out md:inline md:mr-4 lg:mt-8 xl:mt-14 focus:outline-black border-violet-600'
  


  return (
    <section>
      <div className='h-screen max-w-7xl mx-auto p-4 flex items-center justify-center sm:p-6'>
        <div className='flex flex-col gap-5 md:flex-row'>
          <div className='text-center  md:mt-0 md:text-left lg:p-4 md:w-1/2'>
            <p className='text-2xl font-medium opacity-90 md:text-3xl xl:text-4xl'>
              {textContent.myGreetings}
            </p>
            <h1 className='text-6xl font-extrabold text-indigo-500 sm:text-7xl xl:text-8xl'>
              {textContent.name}
            </h1>
            <p className='leading-7 sm:max-w-2xl mx-auto'>
              {textContent.myMessage}
            </p>
            <Button className={`${sharedButtonStyles} bg-indigo-500 text-white hover:bg-transparent hover:text-indigo-500`} text='Hire Me' icon = {<FontAwesomeIcon icon ={faPenToSquare} className='ml-2'/>} />
            <Button className={`${sharedButtonStyles} bg-transparent text-indigo-500 hover:bg-indigo-500 hover:text-white`} text ='CV' icon = {<FontAwesomeIcon icon ={faDownload} className='ml-2'/>} />
          </div>
          <div className='hidden md:flex md:w-1/2'>
            <img className='w-6/12 m-auto md:w-[320px] lg:w-8/12 xl:w-10/12' src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero