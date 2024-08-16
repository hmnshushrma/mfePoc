// apps/remoteAppUserList/src/components/UserList.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { UserModel } from '../../constants/userDetails.model';


const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserModel[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  return (
    <div className="user-list">
      {users?.map((user) => (
        <Link to={`/user/${user.id}`} key={user.id} className="user-card">
          <div className="user-info">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UserList;
