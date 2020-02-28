import React from 'react';
import PropTypes from "prop-types";
import { Alert, Spinner, Container, ListGroup, ListGroupItem } from 'reactstrap';
import AppSpinner from '../spinner/spinner';
import { useListUserRepos } from './repo.list.utils';

const UserRepoLists = ({ userid }) => {

  const { response, error, isLoading } = useListUserRepos(userid, {});
  if (isLoading) {
    return <AppSpinner />
  }

  return (
    <Container className='p-3'>
    <Alert color="success"><strong>{userid}</strong> has {response.length} Repos, please click to view Readme file</Alert>  
    {response.length !== 0 ?
      <ListGroup>
        {response.map(item => (
          <ListGroupItem key={item.id}>
            <a href={`/repos/${item.owner.login}/${item.name}`}>{item.full_name}</a>
          </ListGroupItem>
        ))}
      </ListGroup> : "No Repos"
    }   
    </Container>
  )
}

UserRepoLists.propTypes = {
  userid: PropTypes.string.isRequired,
};

export default UserRepoLists