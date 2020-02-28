import React from 'react';
import PropTypes from "prop-types";
import { ListGroup, Alert, ListGroupItem } from 'reactstrap';

const SearchResults = ({ data }) => {
  return (
    <ListGroup className='mt-2'>
      <Alert color="success">Found {data.length} Results</Alert>
      {data.map(item => (
        <ListGroupItem key={item.id}>
          <a href={`/repos/${item.login}`}>{item.login}</a>
        </ListGroupItem>
      ))}
  </ListGroup>
  )
}

SearchResults.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SearchResults;