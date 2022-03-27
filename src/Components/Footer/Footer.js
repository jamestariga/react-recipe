import { IconContext } from 'react-icons'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { SiDevpost } from 'react-icons/si'

const Footer = () => {
  return (
    <>
      <IconContext.Provider value={{ size: '30px' }}>
        <footer className='text-center bg-stone-600 text-white'>
          <div className='w-full px-6 py-6'>
            <div className='flex justify-center items-center'>
              <div className='flex justify-evenly w-1/2'>
                <a href='https://github.com/jamestariga'>
                  <AiOutlineGithub color='#000' />
                </a>
                <a href='https://www.linkedin.com/in/james-tariga/'>
                  <BsLinkedin color='#035094' />
                </a>
                <a href='https://devpost.com/jamestariga'>
                  <SiDevpost color='#003E54' />
                </a>
              </div>
            </div>
          </div>
          <div className='text-center bg-stone-700 py-2'>
            <p>© 2021 Copyright: James Tariga</p>
          </div>
        </footer>
      </IconContext.Provider>
    </>
  )
}

export default Footer
