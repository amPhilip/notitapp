import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { getBoards } from '../../actions/board';
import CreateBoard from '../other/CreateBoard';
import Navbar from '../other/Navbar';
import CircularProgress from '@material-ui/core/CircularProgress';

const Dashboard = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const boards = useSelector((state) => state.board.boards);
  const loading = useSelector((state) => state.board.dashboardLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Your Boards | notitApp';
  }, []);

  if (!isAuthenticated) {
    return <Navigate to='/' replace={true} />;
  }

  return (
    <div className='dashboard-and-navbar'>
      <Navbar />
      <section className='dashboard'>
        <h1><strong>Welcome</strong> {user && user.name}</h1>
        <h2>Your Project Boards</h2>
        {loading && <CircularProgress className='dashboard-loading' />}
        <div className='boards'>
          {boards.map((board) => (
            <Link key={board._id} to={`/board/${board._id}`} className='board-card'>
              {board.title}
            </Link>
          ))}
          <CreateBoard />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
