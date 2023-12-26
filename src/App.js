// src/App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
//       console.log(response.data); 
//       setResults(response.data.hits);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   const handlePostClick = async (objectId) => {
//     try {
//       const response = await axios.get(`http://hn.algolia.com/api/v1/items/${objectId}`);
//       setSelectedPost(response.data);
//     } catch (error) {
//       console.error('Error fetching post details:', error);
//     }
//   };

//   useEffect(() => {
//     if (selectedPost) {
     
//       console.log('Selected Post:', selectedPost);
//     }
//   }, [selectedPost]);

//   return (
//     <div>
//       <h1>Hacker News Search</h1>
//       <input
//         type="text"
//         placeholder="Enter search query"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       <div>
//         <h2>Search Results</h2>
//         <ul>
//           {results.map((result) => (
//             <li key={result.objectID} onClick={() => handlePostClick(result.objectID)}>
//               {result.title}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {selectedPost && (
//         <div>
//           <h2>Post Details</h2>
//           <p>Title: {selectedPost.title}</p>
//           <p>Points: {selectedPost.points}</p>
//           <h3>Comments:</h3>
//           <ul>
//             {selectedPost.children.map((comment) => (
//               <li key={comment.id}>{comment.text}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// src/App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import DOMPurify from 'dompurify';

// const SearchResults = ({ results, onPostClick }) => (
//   <div className="results-container">
//     <h2>Search Results</h2>
//     <ul>
//       {results.map((result) => (
//         <li key={result.objectID}>
//           <Link to={`/post/${result.objectID}`}>
//             <div className="result-card" onClick={() => onPostClick(result.objectID)}>
//               <h3>{result.title}</h3>
//             </div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );


// const PostDetails = ({ selectedPost }) => {
//   console.log('Selected Post:', selectedPost);

//   return (
//     <div className="post-details-container">
//       {selectedPost ? (
//         <>
//           <h2>Post Details</h2>
//           <div className="post-details-card">
//             <p>Title: {selectedPost.title}</p>
//             <p>Points: {selectedPost.points}</p>
//             <h3>Comments:</h3>
//             <ul>
//               {selectedPost.children.map((comment) => (
//                 <li key={comment.id}>
//                   <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.text) }} />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };



// const App = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
//       setResults(response.data.hits);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };


  
  
//   const handlePostClick = async (objectId) => {
//     try {
//       const response = await axios.get(`http://hn.algolia.com/api/v1/items/${objectId}`);
//       setSelectedPost(response.data);
//     } catch (error) {
//       console.error('Error fetching post details:', error);
//     }
//   };
  
  
//   useEffect(() => {
//     if (selectedPost) {
      
//       console.log('Selected Post:', selectedPost);
//     }
//   }, [selectedPost]);

//   return (
//     <Router>
//       <div className="app-container">
//         <h1>Hacker News Search</h1>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Enter search query"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <button onClick={handleSearch}>Search</button>
//         </div>

//         <Routes>
//           <Route
//             path="/"
//             element={<SearchResults results={results} onPostClick={handlePostClick} />}
//           />
//           <Route path="/post/:objectId" element={<PostDetails selectedPost={selectedPost} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route, Link,  useParams, useLocation } from 'react-router-dom';
// import './App.css';
// import DOMPurify from 'dompurify';

// const SearchResults = ({ results, onPostClick }) => (
//   <div className="results-container">
//     <h2>Search Results</h2>
//     <ul>
//       {results.map((result) => (
//         <li key={result.objectID}>
//           <Link to={`/post/${result.objectID}`}>
//             <div className="result-card" onClick={() => onPostClick(result.objectID)}>
//               <h3>{result.title}</h3>
//             </div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const PostDetails = ({ selectedPost }) => {
//   console.log('Selected Post:', selectedPost);

//   return (
//     <div className="post-details-container">
//       {selectedPost ? (
//         <>
//           <h2>Post Details</h2>
//           <div className="post-details-card">
//             <p>Title: {selectedPost.title}</p>
//             <p>Points: {selectedPost.points}</p>
//             <h3>Comments:</h3>
//             <ul>
//               {selectedPost.children.map((comment) => (
//                 <li key={comment.id}>
//                   <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.text) }} />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   //const navigate = useNavigate();
//   const { objectId } = useParams();
//   const location = useLocation();

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
//       setResults(response.data.hits);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   const handlePostClick = async (objectId) => {
//     try {
//       const response = await axios.get(`http://hn.algolia.com/api/v1/items/${objectId}`);
//       setSelectedPost(response.data);
//     } catch (error) {
//       console.error('Error fetching post details:', error);
//     }
//   };

//   useEffect(() => {
//     if (selectedPost) {
//       console.log('Selected Post:', selectedPost);
//     }
//   }, [selectedPost]);

//   return (
//     <Router>
//       <div className="app-container">
//         <h1>Hacker News Search</h1>
//         {location.pathname === '/' && (
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Enter search query"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button onClick={handleSearch}>Search</button>
//           </div>
//         )}

//         <Routes>
//           <Route
//             path="/"
//             element={<SearchResults results={results} onPostClick={handlePostClick} />}
//           />
//           <Route path="/post/:objectId" element={<PostDetails selectedPost={selectedPost} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResultsPage from './SearchResultsPage';
import PostDetailsPage from './PostDetailsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchResultsPage />} />
        <Route path="/post/:objectId" element={<PostDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
