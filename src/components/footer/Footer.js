import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='u-center-text u-margin-bottom-medium'>
        <h2 className='heading-secondary'>Contact Me</h2>
      </div>
      <div className='btn-group'>
        <a
          href='mailto:trent.edilloran@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn--contact'>
          Email
        </a>
        <a href='https://github.com/tedilloran/' target='_blank' rel='noopener noreferrer' className='btn btn--contact'>
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/trent-edilloran/'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn--contact'>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
