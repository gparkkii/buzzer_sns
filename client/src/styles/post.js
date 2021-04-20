import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 675px;
  width: 100%;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 20px;
  transition: all 0.2s ease;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(180, 180, 180, 0.15);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 68px;
  padding: 0px 20px;
  border-bottom: 1px solid #eaeaea;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 68px;
  padding: 0px 20px;
  font-size: 18px;
  color: #3f92f7;
  border-top: 1px solid #eaeaea;
`;

export const RowBox = styled.div`
  display: flex;
  flex-directin: row;
  align-items: center;
  margin: ${props => props.margin};
  & p {
    margin: 0px 10px;
    font-size: 16px;
  }
`;

export const BoldId = styled.p`
  display: inline-box;
  font-weight: 600;
`;

export const PostContentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80px;
`;

export const PostContents = styled.div`
  padding: 20px;
  width: 100%;
  font-size: 14px;
  text-align: left;
`;

export const StyledTextArea = styled.textarea`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(180, 180, 180, 0.15);
  transition: all 0.2s ease;
  font-size: 14px;
  &:hover {
    box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
    top: -4px;
  }
  &:focus {
    transition: all 0.2s ease-out;
    box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
    top: -4px;
  }
`;

export const TextAreaButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 28px;
`;

export const BuzzButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 44px;
  border-radius: 12px;
  font-size: 18px;
  color: ${props => (props.gray ? '#4371cc' : '#fff')};
  background-color: ${props => (props.gray ? 'transparent' : '#ff357b')};
  border: ${props => props.gray && '1px solid #4371cc'};
  box-shadow: 0 2px 4px 0 rgba(180, 180, 180, 0.15);
  & span {
    display: flex;
  }
  & p {
    margin-right: 8px;
    font-weight: 400;
    text-align: center;
  }
  &:hover {
    top: -2px;
    box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
    transition: all 0.2s ease-out;
  }
`;

export const CommentTitle = styled.p`
  font-size: 15px;
`;

export const CommentFormBox = styled.form`
  width: 100%;
  padding: 15px 20px 10px 20px;
`;

export const CommentTextArea = styled.textarea`
  position: relative;
  width: 100%;
  height: 60px;
  padding: 20px;
  margin-top: 8px;
  border-radius: 12px;
  background-color: #fff;
  transition: all 0.2s ease;
  font-size: 14px;
  &:hover {
    top: -2px;
  }
  &:focus {
    transition: all 0.2s ease-out;
    top: -2px;
  }
`;

export const CommentButton = styled.button`
  position: relative;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  margin-top: 4px;
  font-size: 15px;
  border-radius: 8px;
  background-color: #ff357b;
  color: #fff;
  z-index: 10;
  & span {
    display: flex;
  }
  & p {
    margin-right: 8px;
    font-weight: 400;
    text-align: center;
  }
`;

export const ListBox = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 20px;
  transition: all 0.2s ease;
  background-color: #f0f0f0;
`;

export const StyledList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  border-top: 1px solid #ddd;
  & button {
    font-size: 13px;
    font-weight: 600;
    color: #3f92f7;
  }
`;

export const HashTag = styled.a`
  color: #2760a5;
  &:hover {
    color: #3f92f7;
  }
`;
