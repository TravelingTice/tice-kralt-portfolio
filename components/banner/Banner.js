import styled from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Container, Row, Col } from 'reactstrap';
import sortBy from 'sort-by';
import useViewportWidth from '../../hooks/useViewportWidth';

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
  h1, h2 {
    display: inline-block;
    padding: 3px 10px;
    margin: 0;
    background-color: rgba(255,255,255,.4);
    font-size: 1.5em;
    @media (min-width: 576px) {
      font-size: 1.7em;
    }
    @media (min-width: 768px) {
      font-size: 2em;
    }
  }
`;

const Banner = () => {
  const bannerHeights = [
    { breakPoint: 0, height: 413 },
    { breakPoint: 576, height: 500 },
    { breakPoint: 768, height: 600 },
    { breakPoint: 992, height: 500 }
  ];

  const { vw } = useViewportWidth();

  const getBannerHeightForWidth = (width) => {
    const sortedHeights = bannerHeights.sort(sortBy('-breakPoint'));

    for (let i = 0; i < sortedHeights.length; i ++) {
      const { breakPoint, height } = sortedHeights[i];
      if (breakPoint < width) return height;
    }
  }

  const bannerHeight = getBannerHeightForWidth(vw);

  return (
    <>
      <section style={{position: 'relative', height: bannerHeight}}>
        <PositionedDiv>
          <Container>
            <Row>
              <Col xs="12">
                <div>
                  <h1>Tice Kralt</h1>
                </div>

                <div>
                  <h2>Full-stack web developer</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </PositionedDiv>
      </section>
      <BannerBg height={bannerHeight}/>
    </>
  );
}

export default Banner;