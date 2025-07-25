import React from 'react';

import './HelloWorld.less';

interface HelloWorldProps {
  message?: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ message = 'Hello, World!' }) => {
  return (
    <div className='hello-world'>
      <h2>{message}</h2>
      <p>This is a simple HelloWorld component</p>
    </div>
  );
};

export default HelloWorld;
