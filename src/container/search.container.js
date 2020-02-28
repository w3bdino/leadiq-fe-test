import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import SearchComponent from '../components/search/search';

const SearchPage = () => {
  return (
    <>
      <Header />
      <SearchComponent />
      <Footer />
    </>
  )
}

export default SearchPage