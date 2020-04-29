import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const BannerBg = (props) => (
  <ParallaxBanner
      layers={[
        {
          image: '/images/big-tice-background-high.jpg',
          amount: 0.4,
          expanded: true,
          props: { 
            style: {
              backgroundPosition: '50% 0%'
            }
          }
        }
      ]}
      style={{
        height: props.height,
        position: 'absolute',
        top: props.navHeight * 0.4,
        zIndex: -2 
      }}>
    </ParallaxBanner>
);

export default BannerBg;