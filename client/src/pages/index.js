import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from 'components/Common/AppLayout';
import PostForm from 'components/Post/PostForm';
import PostCard from 'components/Post/PostCard';
import { RowWrapper, SideWrapper, ContentWrapper } from 'styles/wrapper';

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <AppLayout>
      <RowWrapper>
        <ContentWrapper>
          {isLoggedIn && <PostForm />}
          {mainPosts?.map(post => {
            return <PostCard key={post.id} post={post} />;
          })}
        </ContentWrapper>
        <SideWrapper />
      </RowWrapper>
    </AppLayout>
  );
};

export default Home;
