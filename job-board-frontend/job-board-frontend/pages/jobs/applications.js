import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      axios.get('http://127.0.0.1:8000/api/applications/')
        .then(response => {
          setApplications(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [user]);

  if (!user) return <div>Please log in to view your applications.</div>;

  return (
    <div style={{ margin: '0 auto', maxWidth: '800px' }}>
      <h2>Your Applications</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            <p>Job Title: {app.job.title}</p>
            <p>Status: {app.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
