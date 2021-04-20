import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from 'components/Common/AppLayout';
import PostForm from 'components/Post/PostForm';
import PostCard from 'components/Post/PostCard';
import UserProfile from 'components/Profile/UserProfile';
import IndexSider from 'components/IndexSider';
import { RowWrapper, SideWrapper, ContentWrapper } from 'styles/wrapper';

const Home = () => {
  const { loginDone } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <AppLayout>
      <RowWrapper>
        <SideWrapper margin="0px 40px 0px 0px">
          <UserProfile />
        </SideWrapper>
        <ContentWrapper>
          {loginDone && <PostForm />}
          {mainPosts?.map(post => {
            return <PostCard key={post.id} post={post} />;
          })}
        </ContentWrapper>
        <SideWrapper margin="0px 0px 0px 40px">
          <IndexSider />
        </SideWrapper>
      </RowWrapper>
    </AppLayout>
  );
};

export default Home;
