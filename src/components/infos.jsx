// src/pages/Info.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Info() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <div>No user data found.</div>;
  }

  return (
    <div className="info-container">
      <h2>User Info</h2>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <button onClick={() => navigate('/update')}>Edit Info</button>
    </div>
  );
}

export default Info;