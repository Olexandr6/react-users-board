import React, { useEffect, useState } from 'react';
import './App.scss';
import { UserList } from './components/UserList';
import { AddUserForm } from './components/AddUserForm';
import { AppContainer } from './components/AppContainer';
import { User } from './types';
import * as userService from './services/user.service';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userService.getUsers().then(setUsers);
  }, []);

  const addUser = async (name: string, carColorId: number) => {
    const newUser = await userService.addUser({ name, carColorId });

    setUsers(prev => [...prev, newUser]);
  };

  return (
    <AppContainer>
      <UserList users={users} />

      <AddUserForm addUser={addUser} />
    </AppContainer>
  );
};
