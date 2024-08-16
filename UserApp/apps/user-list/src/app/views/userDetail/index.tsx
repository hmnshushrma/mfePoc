// apps/remoteAppUserList/src/components/UserDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
};

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading user details...</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="user-detail">
      <div className="user-card-detail">
        <img 
          src={`https://via.placeholder.com/150?text=${user.name.charAt(0)}`} 
          alt="Profile" 
          className="user-profile-pic" 
        />
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p className="catchphrase"><em>{user.company.catchPhrase}</em></p>
      </div>
    </div>
  );
};

export default UserDetail;
