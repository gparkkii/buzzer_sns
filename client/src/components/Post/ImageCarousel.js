import React from 'react';
import { PropTypes } from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <CarouselWrapper>
        <StyledSlider {...settings}>
          {images.map(v => (
            <div key={v.src}>
              <img src={v.src} alt={v.src} />
            </div>
          ))}
        </StyledSlider>
      </CarouselWrapper>
    </>
  );
};

export default ImageCarousel;

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    }),
  ).isRequired,
};

const CarouselWrapper = styled.div`
  position: relative;
  width: inherit;
  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const StyledSlider = styled(Slider)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .slick-list {
    width: 100%;
    height: 100%;
    .slick-track {
      height: inherit;
    }
    .slick-slide div {
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      height: inherit;
      & div {
        display: flex !important;
        justify-content: center;
        & img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          align: center;
          vertical-align: middle;
        }
      }
    }
  }
  .slick-prev {
    left: 25px;
    z-index: 99;
  }
  .slick-next {
    right: 25px;
  }
  .slick-dots {
    bottom: 25px;
    & li.slick-active {
      color: #3f92f7 !important;
    }
    & button:before {
      color: #3f92f7 !important;
    }
  }
`;
