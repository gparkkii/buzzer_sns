import React from 'react';
import { PropTypes } from 'prop-types';

const PostImages = ({ images }) => {
  return <div>PostImages</div>;
};

export default PostImages;

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
