import React from 'react';
import './SocialLinks.scss';
import {} from 'react-i';

const GITHUB_URL = 'https://github.com/codewithsakshi';
const TWITTER_URL = 'https://twitter.com/sakshimittal01';
const LINKEDIN_URL = 'https://www.linkedin.com/in/sakshimittal01/';
const CODESANDBOX_URL = 'https://codesandbox.io/u/codewithsakshi';

export default function SocialLinks() {
  return (
    <div className='social-links-container'>
      <i class='bx bx-user'></i>
      <i class='bx bxs-user'></i>
      <i class='bx bxl-facebook-square'></i>
    </div>
  );
}
