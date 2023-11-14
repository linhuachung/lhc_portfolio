import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://www.linkedin.com/in/lin-hua-chung-200158179' target={'_blank'} rel='noreferrer'>
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://www.facebook.com/linhuachung' target={'_blank'} rel='noreferrer'>
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href='https://github.com/linhuachung' target={'_blank'} rel='noreferrer'>
        <BsGithub />
      </a>
    </div>
  </div>
)

export default SocialMedia
