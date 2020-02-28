import React, { useState } from 'react';
import { Container, Row, Col, Alert, Spinner, Button, Form, InputGroup, InputGroupAddon, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import AppSpinner from '../spinner/spinner';
import SearchResults from './search.results';
import useFetch from './search.utils';
import './search.scss';


function SearchComponent() {
  const [query, setQuery] = useState('');
  const [{ data, error, isLoading }, searchUser] = useFetch("");

  return (
    <Container className='search-container h-100'>
      <Form
        className="form-inline searchform"
        onSubmit={event => {
          searchUser(query);
          event.preventDefault();
        }}
      >
      <InputGroup>
        <Input 
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Search User" 
          required
        />
        <InputGroupAddon addonType="prepend">
          <Button type="submit">Submit</Button>
        </InputGroupAddon>
      </InputGroup>              
      </Form>

      {error && <Alert color="danger">Something went wrong ...</Alert>}
      {isLoading && <AppSpinner />}
      {data.length !== 0 && <SearchResults data={data} />}

    </Container>
  );
}

export default SearchComponent;
