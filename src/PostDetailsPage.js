// PostDetailsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import './App.css';

const PostDetailsPage = () => {
  const { objectId } = useParams();
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`http://hn.algolia.com/api/v1/items/${objectId}`);
        setSelectedPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [objectId]);

  return (
    <div className="post-details-container">
      {selectedPost ? (
        <>
          <h1>Post Details</h1>
          <div className="post-details-card">
            <h3>Title: {selectedPost.title}</h3>
            <h3>Points: {selectedPost.points}</h3>
            <h3>Comments:</h3>
            <ul>
              {selectedPost.children.map((comment) => (
                <li key={comment.id}>
                  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.text) }} />
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetailsPage;
