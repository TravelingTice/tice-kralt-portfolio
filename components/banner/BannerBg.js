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
              backgroundPosition: '60% 0%'
            }
          }
        }
      ]}
      style={{
        height: height,
        position: 'absolute',
        top: navHeight * 0.4,
        zIndex: -2 
      }}>
    </ParallaxBanner>
);

export default BannerBg;