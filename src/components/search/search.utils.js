import React, { useState, useEffect } from 'react';

const useFetch = (initialSearch, options) => {
  const [searchname, searchUser] = useState(initialSearch);
  const [data, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.github.com/search/users?q=${searchname}`, options);
        const json = await res.json();
        setResponse(json.items);
        setIsLoading(false)
      } catch (error) {
        setError(error);
        setIsLoading(false)        
      }
    };

    if(searchname){
      fetchData();
    }
  }, [searchname]);

  return [{ data, error, isLoading }, searchUser];
};

export default useFetch