import React, { useEffect, useState } from 'react';
import './App.scss';
import { UserList } from './components/UserList';
import { AddUserForm } from './components/AddUserForm';
import { AppContainer } from './components/AppContainer';
import { Color, UserWithColor } from './types';
import { prepareUsers } from './helpers';
import { createUser, getUsers } from './services/users.service';
import { getColors } from './services/colors.service';

export const App: React.FC = () => {
  const [users, setUsers] = useState<UserWithColor[]>([]);
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    Promise.all([
      getUsers(),
      getColors(),
    ])
      .then(([usersFromServer, colorsFromServer]) => {
        const preparedUsers = prepareUsers(usersFromServer, colorsFromServer);

        setUsers(preparedUsers);
        setColors(colorsFromServer);
      });
  }, []);

  const addUser = async (name: string, carColorId: number) => {
    const newUser = await createUser({ name, carColorId });
    const carColor = colors.find(c => c.id === carColorId);

    setUsers((prev) => [...prev, { ...newUser, carColor }]);
  };

  return (
    <AppContainer>
      <UserList users={users} />

      <AddUserForm colors={colors} addUser={addUser} />
    </AppContainer>
  );
};
