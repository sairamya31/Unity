// SearchResultsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const SearchResultsPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setResults(response.data.hits);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handlePostClick = (objectId) => {
    // Navigate to the post details page when a search result is clicked
    navigate(`/post/${objectId}`);
  };

  return (
    <div className="search-results-page">
      <h1>Hacker News Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="results-container">
        <h2>Search Results</h2>
        <ul>
          {results.map((result) => (
            <li key={result.objectID}>
              <Link to={`/post/${result.objectID}`}>
                <div className="result-card" onClick={() => handlePostClick(result.objectID)}>
                  <h3>{result.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResultsPage;
