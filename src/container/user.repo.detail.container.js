import React from 'react';
import PropTypes from "prop-types";
import Header from '../layout/header';
import Footer from '../layout/footer';
import UserRepoDetail from '../components/repodetail/repo.detail';


const UserRepoDetailPage = ({ userid, repoid }) => {
  return (
    <>
      <Header />
      <UserRepoDetail userid={ userid } repoid={ repoid } />
      <Footer />      
    </>
  )
}

UserRepoDetailPage .propTypes = {
  userid: PropTypes.string.isRequired,
  repoid: PropTypes.string.isRequired,  
};

export default UserRepoDetailPage