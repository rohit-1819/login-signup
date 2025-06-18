import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Mary Doe',
    email: 'mary@gmail.com',
    bio: 'lorem ipsum ldsfj lsdjf dslfj ouefd eorund ldsfj fsoefho sfdjf ldfjldf',
    avatar: 'https://via.placeholder.com/150'
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    setEditMode(false);
  };

  return (
    <div className="app-container">
      <p>Account Settings</p>
      <div className="profile-card">
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Bio:</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditMode(false)}>
              Cancel
            </button>
          </form>
        ) : (
          <>
            <div className="avatar-container">
              <img src={user.avatar} alt="Profile" className="avatar" />
            </div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.bio}</p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          </>
        )}
      </div>
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default Profile;