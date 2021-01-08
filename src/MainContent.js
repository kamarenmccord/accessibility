import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function MainContent() {
    return (
          <div className='app__head'>
            <h2>What is Web accessibility?</h2>
            <p>Web accessibility is the inclusive practice of ensuring there are <strong>no barriers that prevent interaction with, or access to, websites on the World Wide Web</strong> by people with physical disabilities, situational disabilities, and socio-economic restrictions on bandwidth and speed. When sites are correctly designed, developed and edited, generally all users have equal access to information and functionality. &nbsp; 
            <a href='https://en.wikipedia.org/wiki/Web_accessibility'>(see full Wiki)</a>
            </p>
            <p className='app__secondP'>&nbsp;<ArrowBackIcon />&nbsp;Click on the information to the left to learn more.</p>
          </div>
    )
}

export default MainContent
