import React from 'react';
import ReactMarkdown from 'react-markdown';
import base64 from 'base-64';
import utf8 from 'utf8';
import PropTypes from "prop-types";
import { Container } from 'reactstrap';
import AppSpinner from '../spinner/spinner';
import RepoNonExist from './repo.none.exists';
import { useReposReadme } from './repo.detail.utils';
import './repo.detail.scss';

const UserRepoDetail = ({ userid, repoid }) => {

  const { content, error, isLoading } = useReposReadme(userid, repoid);
  if (isLoading) {
    return <AppSpinner />
  }    

  if (!content) {
    return <RepoNonExist />
  }  

  var bytes = base64.decode(content);
  var text = utf8.decode(bytes);
  return (
    <Container className="markdown-body mt-3 mb-3 pt-1 pb-1">
      <ReactMarkdown source={text} />
    </Container>
  )
}

UserRepoDetail.propTypes = {
  userid: PropTypes.string.isRequired,
  repoid: PropTypes.string.isRequired,  
};

export default UserRepoDetail