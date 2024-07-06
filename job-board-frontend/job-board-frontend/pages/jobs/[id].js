import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';

export default function JobDetails() {
  const [job, setJob] = useState(null);
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:8000/api/jobs/${id}/`)
        .then(response => {
          setJob(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [id]);

  const applyForJob = () => {
    if (user) {
      axios.post(`http://127.0.0.1:8000/api/jobs/${id}/apply/`)
        .then(response => {
          alert('Applied successfully');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      router.push('/login');
    }
  };

  if (!job) return <div>Loading...</div>;

  return (
    <div style={{ margin: '0 auto', maxWidth: '800px' }}>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <button onClick={applyForJob}>Apply for Job</button>
    </div>
  );
}
