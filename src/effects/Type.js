import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Type() {
  const [text] = useTypewriter({
    words: ['Software Developer', 'UI/UX Designer', 'ML Developer'],
    loop: true, // Run only once
    typeSpeed: 70, // Adjusted for a more natural typing speed
    deleteSpeed: 50, // Adjusted for a more natural deleting speed
  });
  return (
    <span >
      <span className='ml-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500'>
        {text}
      </span>
      <span style={{ fontWeight: 'bold', color: 'white' }}>
        <Cursor />
      </span>
    </span>
  );
}

export default Type;
