import React from 'react';
import { Link } from 'react-router-dom';

import './HomeView.less';
import HelloWorld from '@/components/hello-world/HelloWorld';

const HomeView: React.FC = () => {
  return (
    <div className='home-view'>
      <h1>Home Page</h1>
      <HelloWorld message='Welcome to Home Page' />
      <div className='navigation'>
        <Link
          className='nav-link'
          to='/about'>
          Go to About Page
        </Link>
      </div>
    </div>
  );
};

export default HomeView;
