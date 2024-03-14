import React, { useState, useEffect } from 'react';
import './index.css'

const Home = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      .then(response => response.json())
      .then(data => {
        setJokes(data.jokes);
      });
  }, []);

  return (
    <div className="container">
      <h2>Jokes</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{joke.category}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
