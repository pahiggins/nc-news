import React from 'react';
import styled from 'styled-components';
import Votes from '../Votes';

const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  &:first-child {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  &:last-child {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const Author = styled.div`
  padding-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: #03a87c;
`;

const P = styled.p`
  padding-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
  color: rgba(0, 0, 0, 0.84);
`;

const Comment = ({ comment, updateVotes, articleId }) => {
  return (
    <StyledComment>
      <Author>{comment.author}</Author>
      <P>{comment.body}</P>
      <Votes
        votes={comment.votes}
        articleId={articleId}
        commentId={comment.comment_id}
        updateVotes={updateVotes}
        inputHeight="2rem"
      />
    </StyledComment>
  );
};

export default Comment;
