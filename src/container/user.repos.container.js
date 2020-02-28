import React from 'react';
import PropTypes from "prop-types";
import Header from '../layout/header';
import Footer from '../layout/footer';
import UserRepoLists from '../components/repolist/repo.list';


const UserRepoPage = ({ userid }) => {
  return (
    <>
      <Header />
      <UserRepoLists userid={ userid } />
      <Footer />      
    </>
  )
}

UserRepoPage .propTypes = {
  userid: PropTypes.string.isRequired,
};

export default UserRepoPage