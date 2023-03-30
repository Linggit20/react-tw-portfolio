import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faPaperPlane, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  
  const textContent = {title: 'Get In Touch With Me', myMessage: 'Let\'s talk about your website or project. Send me a message and I will be in touch within one business day.' }
  const myInfo = [
    { icon: faLocationDot, textInfo: 'Tuburan, Ligao City, Albay' },
    { icon: faPhone, textInfo: '+639511804050'},
    { icon: faEnvelope, textInfo: 'botonesallan7@gmail.com' },
  ]

  const formArea = [
    {id: 'name', type: 'text', label: 'name', value: 'Name'},
    {id: 'email', type: 'text', label: 'email',  value: 'Email'},
  ]

  const sharedLayoutStyle = 'mb-5 flex justify-center relative'
  const sharedInputStyle = 'text-input p-5 w-full rounded-lg'
  const sharedLabeltStyle = 'float-label absolute left-5 top-1/2 translate-y-[-50%] text-indigo-500 pointer-events-none'
  const sharedButtonStyles = 'font-medium block mx-auto text-center w-32 rounded-md py-2 border border-indigo-500 duration-200 ease-in-out bg-indigo-500 text-white hover:bg-transparent hover:text-indigo-500'

  
  const formSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <section>
      <div className='max-w-7xl mx-auto p-4 sm:p-6 m-10 bg-gray-100 rounded-md lg:py-10'>
         <div className='flex flex-col lg:grid  lg:grid-cols-2 lg:gap-8'>
          <div className='text-area'>
           <div className='mb-6'>
            <h1 className='text-indigo-500 text-3xl font-bold my-2'>{textContent.title}</h1>
            <p className='leading-7'>{textContent.myMessage}</p>
           </div>
           <ul className='mb-6'>
            { myInfo.map((info, index) => {
              return (
                <li key={index} className='mb-3'>
                  <span className='text-indigo-500 text-lg mr-4'><FontAwesomeIcon icon={info.icon}/></span>
                  {info.textInfo}
                </li>
              )
            })}
           </ul>
          </div>
          <div className='form-area'>
            <form action="">
              {formArea.map((form, index) => {
                return (
                  <div key={index} className={`${sharedLayoutStyle}`}>
                    <input id={form.id} type={form.type} className={`${sharedInputStyle}`} required />
                    <label htmlFor={form.label} className={`${sharedLabeltStyle}`}>{form.value}</label>
                    <p className='validation absolute right-5 top-1/2 translate-y-[-50%] hidden'>
                      <FontAwesomeIcon icon={faCircleExclamation} className='text-red-500 text-lg'/> 
                    </p>
                  </div>
                )
              })}
              <div className={`${sharedLayoutStyle}`}>
                <textarea id="text-area" cols="30" rows="10" required className='text-area w-full p-5 rounded-lg min-h-[320px] max-h-[320px]'></textarea>
                <label htmlFor="text-area" className='text-area-label absolute left-5 top-5 text-indigo-500'>Message</label>
              </div>
             <button  onClick={formSubmit} className={`${sharedButtonStyles}`}>Send <FontAwesomeIcon icon={faPaperPlane} className='ml-1'/></button>
            </form>
          </div>
         </div>
      </div>
    </section>
  )
}

export default Contact