import React from 'react';

class CustomHeader extends React.Component {
  render() {
    const vidPath = process.env.PUBLIC_URL + '/assets/videos/video1.mp4';
    const profilePath = process.env.PUBLIC_URL + '/assets/pictures/profile.jpg';
    const resumePath = process.env.PUBLIC_URL + '/assets/documents/resume.pdf';

    return (
      <header className='header'>
        <div className='bg-video'>
          <video className='bg-video__content' muted loop autoPlay>
            <source src={vidPath} type='video/mp4' />
            <source src={vidPath} type='video/webm' />
          </video>
        </div>
        <div className='header__text-box'>
          <img className='header__picture' alt='Profile' src={profilePath} />
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>Trent Edilloran</span>
            <span className='heading-primary--sub'>Software Developer</span>
          </h1>
          <a href={resumePath} className='btn btn--animated' download>
            View Resume
          </a>
          <div className='header__scroll-arrow'>&or;</div>
        </div>
      </header>
    );
  }
}

export default CustomHeader;
