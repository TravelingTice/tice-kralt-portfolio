import styled from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';

const BannerBg = ({ height }) => (
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
        height,
        position: 'absolute',
        top: 0,
        zIndex: -2 
      }}>
    </ParallaxBanner>
);

const PositionedDiv = styled.div`
  position: absolute;
  bottom: 103px;
  left: 18px;
  h1, h2 {
    display: inline-block;
    padding: 3px 10px;
    margin: 0;
    background-color: rgba(255,255,255,.4);
    font-size: 1.5em;
  }
`;

const Banner = () => {
  const bannerHeight = 413;

  return (
    <>
      <section style={{position: 'relative', height: bannerHeight}}>
        <PositionedDiv>
          <div>
            <h1>Tice Kralt</h1>
          </div>
          <div>
            <h2>Full-stack web developer</h2>
          </div>
        </PositionedDiv>
      </section>
      <BannerBg height={bannerHeight}/>
    </>
  );
}

export default Banner;