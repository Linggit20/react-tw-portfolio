import foodtrip from '../../assets/foodtrip.png'

const Project = () => {
   const title =  { title: 'Projects', subtitle: 'My Works' }
   const myProject = [{ projectImg: foodtrip, projectLink: 'https://linggit20.github.io/mini-project-1/', projectInfo: 'Static e-commerce website', alt: 'project-1-img'},]

  return (
    <section>
      <div className='max-w-7xl mx-auto m-10 p-4 sm:p-6'>
        <div className='w-48 mb-5'>
          <h1 className='text-4xl font-bold relative pb-2  text-indigo-500 after:content-[""] after:w-full after:h-[2px] after:bg-indigo-500 after:absolute after:left-0 after:bottom-0'>{title.title}</h1>
          <p className='text-xl font-medium relative left-1/2'>{title.subtitle}</p>
        </div>
        <div className='sm:grid  md:grid-cols-3 md:gap-5 '>
          {
            myProject.map((project, index) => {
              return (
                <div key={index} className='flex items-center justify-center mb-7 m-auto'>
                    <a href={project.projectLink} className='project flex items-center justify-center relative'>
                      <img className='w-80 md:w-auto m-auto object-cover object-center' src={project.projectImg} alt={project.alt} />
                      <span className='z-10 absolute top-1/2 translate-y-[-50%] text-white'>{project.projectInfo}</span>
                    </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Project