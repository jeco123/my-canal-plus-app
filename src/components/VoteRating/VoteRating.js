import React from 'react';
import ReactStars from 'react-stars';
import './VoteRating.css';

const VoteRating = ({ rate, nbVotes }) => {
  const voteText = nbVotes > 1 ? 'votes' : 'vote';
  return (<div className='VoteRating'>
    <div className='voteStars'>
      <ReactStars
        count={5}
        value={rate}
        edit={false}
        size={24} />
    </div>
    <div className='voteCount'>{`${nbVotes} ${voteText}`}</div>
  </div>
  );
};

export default VoteRating;