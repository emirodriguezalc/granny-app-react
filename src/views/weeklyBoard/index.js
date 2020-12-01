import React from 'react';
import Header from '../../components/header';
import './styles.css';
import FriendBox from '../../components/friendBox'

const WeeklyBoard = ({ list }) => (
 <section className="weekly-board-section">
  <Header title="Weekly Board" backTo="/haveFunMenu" />
  <div className="weekly-board-list">
   {list.map(friend => <FriendBox name={friend.name} friends={friend.friends} points={friend.points} inviteLink={friend.inviteLink} />)}
  </div>
 </section>
);

export default WeeklyBoard;
