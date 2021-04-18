import React from 'react';
import Link from 'next/link';
import { PropTypes } from 'prop-types';
import { PostContents, HashTag } from 'styles/post';

const PostContent = ({ children }) => {
  console.log(children);
  return (
    <PostContents>
      {children.split(/(#[^\s#]+)/g).map(tag => {
        if (tag.match(/(#[^\s]+)/)) {
          return (
            <Link
              href={{ pathname: '/hashtag', query: { tag: tag.slice(1) } }}
              as={`/hashtag/${tag.slice(1)}`}
              key={tag}
            >
              <HashTag>{tag}</HashTag>
            </Link>
          );
        }
        return tag;
      })}
    </PostContents>
  );
};

export default PostContent;

PostContent.propTypes = {
  children: PropTypes.string.isRequired,
};
