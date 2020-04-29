import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const BannerBg = (props) => (
  <ParallaxBanner
      layers={[
        {
          image: '/images/big-tice-background.jpg',
          amount: 0.2,
          expanded: true,
          props: { 
            style: {
              backgroundPosition: '50% 30%'
            }
          }
        }
      ]}
      style={{
        height: props.height,
        position: 'absolute',
        top: props.navHeight * 0.6,
        zIndex: -2 
      }}>
    </ParallaxBanner>
);

export default BannerBg;