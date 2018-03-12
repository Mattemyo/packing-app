import React from 'react';
import { AnimatedSwitch, spring } from 'react-router-transition';

// we need to map the `translateX` prop we define below
// to the transform style property
const mapStyles = ({ translateX, opacity }: { translateX: number, opacity: number }): {} => ({
  opacity,
  transform: `translateX(${translateX}%)`
});

// wrap the `spring` helper to use a bouncy config
const bounce = (val: {}): {} =>
  spring(val, {
    stiffness: 150,
    damping: 20
  });
// child matches will...
const bounceTransition = {
  // start in a transparent, uptranslateXd state
  atEnter: {
    opacity: 0,
    translateX: 25
  },
  // leave in a transparent, downtranslateXd state
  atLeave: {
    opacity: bounce(0),
    translateX: bounce(-25)
  },
  // and rest at an opaque, normally-translateXd state
  atActive: {
    opacity: bounce(1),
    translateX: bounce(0)
  }
};

export default ({ children }) => (
  <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
  >
    {children}
  </AnimatedSwitch>
);
