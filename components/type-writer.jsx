'use client';

import { Typewriter } from 'react-simple-typewriter';

const TypeWriterAnimation = () => {
  return (
    <Typewriter
      words={['Yusril Septriandy. N. Y', 'Web Developer']}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default TypeWriterAnimation;
