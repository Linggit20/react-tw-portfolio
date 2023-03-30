import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTiktok, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const links = [
   { name: 'Home', link: '/' },
   { name: 'About', link: '/' },
   { name: 'Projects', link: '/' },
   { name: 'Contact', link: '/' },
   { name: 'FoodTrip', link: 'https://linggit20.github.io/mini-project-1/'},
   {name: 'Facebook', icon: faFacebookSquare,  link: 'https://www.facebook.com/adeniros2'},
   {name: 'Tiktok', icon: faTiktok, link: '/'},
   {name: 'Instagram', icon: faInstagramSquare, link: '/'}
]

const arrLinks = () => {
   const mainLinks = links.slice(0, 4)
   const projects = links.slice(4, 5 )
   const socials  = links.slice(5, 8)

   return { mainLinks, projects, socials }
}

const Footer = () => {
   const  { mainLinks, projects, socials } = arrLinks()

   const sharedHeadingStyle = 'text-xl mb-1'
   const sharedLayoutStyles = 'text-white w-32'

  return (
    <div className='w-full bg-gradient-to-r from-indigo-500  to-purple-500 py-8 px-10'>
      <div className='max-w-7xl md:max-w-4xl p-4 m-auto grid grid-cols-2 md:grid-cols-3 gap-4'>
         <div className={`${sharedLayoutStyles}`}>
            <h1 className={`${sharedHeadingStyle}`}>Site Links</h1>
            <ul>
            {mainLinks.map((links) => (
               <li key={links.name} className='mb-1'>
                  <a className='hover:underline hover:text-indigo-900' href={links.link}>{links.name}</a>
               </li>
            ))}
            </ul>
         </div>
         <div className={`${sharedLayoutStyles}`}>
            <h1 className={`${sharedHeadingStyle}`}>Projects</h1>
           <ul>
            {projects.map((project) => (
               <li key={project.name} className='mb-1'>
                  <a className='hover:underline hover:text-indigo-900' href={project.link}>{project.name}</a>
               </li>
            ))}
           </ul>
         </div>
         <div className={`${sharedLayoutStyles}`}>
            <ul className='flex'>
               {socials.map((social) => (
                  <li key={social.name} className='mb-1'>
                     <a className='hover:underline hover:text-indigo-900 text-3xl mr-6' href={social.link}><FontAwesomeIcon icon={social.icon} /></a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Footer