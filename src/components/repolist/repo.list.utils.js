import React, { useState, useEffect } from 'react';

export const useListUserRepos = (userid, options) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`https://api.github.com/users/${userid}/repos`, options);
          const json = await res.json();
          setResponse(json);
          setIsLoading(false)
        } catch (error) {
          setError(error);
          setIsLoading(false)
        }
      };
      fetchData();
    }, []);

    return { response, error, isLoading };
};