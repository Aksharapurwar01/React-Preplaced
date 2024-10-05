// The useEffect hook is used to perform side effects in your functional components, such as fetching data, 
// subscribing to external events, or manually changing the DOM. It combines the functionality of componentDidMount, 
// componentDidUpdate, and componentWillUnmount in class components.
import { useEffect, useState } from "react";
import axios from 'axios';
import fetch from "node-fetch";

const useFetch = ( url ) => {
  const [data, setData] = useState(null); // State to hold fetched data
  const [error, setError] = useState(null); // State to hold error messages
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data  = await response.json();
        setData(data); // Set the data directly from the response
      } catch (err) {
        console.log("Error", err);
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

const UseeParentComponent = () => {
  const { data, error } = useFetch("https://jsonplaceholder.typicode.com/users" );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data ? (
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.name}</li> // Render user names
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UseeParentComponent;
