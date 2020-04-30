import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const BannerBg = ({ height, navHeight }) => (
  <ParallaxBanner
      layers={[
        {
          image: '/images/big-tice-background.jpg',
          amount: 0.4,
          expanded: true,
          props: { 
            style: {
              backgroundPosition: '60% 50%'
            }
          }
        }
      ]}
      style={{
        height: height + 23,
        position: 'absolute',
        top: navHeight * 0.4,
        zIndex: -2 
      }}>
    </ParallaxBanner>
);

export default BannerBg;