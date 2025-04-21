import React from 'react';
import ExtensionsLayout from './components/ExtensionsLayout';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='font-notoSans max-w-5xl mx-auto py-10 px-4'>
      <Navbar />
      <ExtensionsLayout />
    </div>
  );
}

export default App;
