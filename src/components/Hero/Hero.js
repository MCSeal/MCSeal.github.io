import React from 'react';
import { useSpring, animated } from 'react-spring';
import style from './Hero.css';

const Hero = () => {
  const stylePicture = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    config: { duration: '1000' },
  });
  const styleName = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    config: { duration: '1300' },
  });
  const styleInfo = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    config: { duration: '1600' },
  });
  return (
    <div class="full-hero">
      <animated.div class="sliding-hero" style={stylePicture}>
        <div class="bio-box">
          <img src="https://pbs.twimg.com/profile_images/1293597689578430470/aCWj91ia_400x400.jpg" />
        </div>
      </animated.div>

      <div class="bio-info">
        <animated.div class="sliding-hero" style={styleName}>
          <h1 class="name">Hi, I'm Mathew</h1>
        </animated.div>
        <animated.div class="sliding-hero" style={styleInfo}>
          <div class="desc"> I like to build interesting web applications.</div>
        </animated.div>
      </div>
    </div>
  );
};

export default Hero;
