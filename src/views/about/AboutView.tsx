import React from 'react';
import { Link } from 'react-router-dom';

import './AboutView.less';
import HelloWorld from '@/components/hello-world/HelloWorld';

const AboutView: React.FC = () => {
  return (
    <div className='about-view'>
      <h1>About Page</h1>
      <HelloWorld message='Welcome to About Page' />
      <div className='content'>
        <p>This is a simple about page created with React and React Router.</p>
      </div>
      <div className='navigation'>
        <Link
          className='nav-link'
          to='/'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AboutView;
