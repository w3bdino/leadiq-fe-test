import React, { useState, useEffect } from 'react';

export const useReposReadme = (userid, repoid) => {
    const [content, setResponse] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`https://api.github.com/repos/${userid}/${repoid}/readme`);
          const json = await res.json();
          setResponse(json.content);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);

    return { content, error, isLoading };
};