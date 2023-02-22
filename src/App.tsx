import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import './App.scss';
import { PropTypes } from '@mui/material';
import { UserList } from './components/UserList';
import { AddUserForm } from './components/AddUserForm';
import { AppContainer } from './components/AppContainer';
import { Color, User, UserWithColor } from './types';
import { prepareUsers } from './helpers';
import { createUser, getUsers } from './api/users.api';
import { getColors } from './api/colors.api';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [colors, setColors] = useState<Color[]>([]);

  const usersWithColor = useMemo(
    () => prepareUsers(users, colors),
    [users, colors],
  );

  useEffect(() => {
    Promise.all([getUsers(), getColors()])
      .then(([usersFromServer, colorosFromServer]) => {
        setColors(colorosFromServer);
        setUsers(usersFromServer);
      });
  }, []);

  const addUser = useCallback(async (name: string, carColorId: number) => {
    const newUser = await createUser({ name, carColorId });

    setUsers((prev) => [...prev, newUser]);
  }, []);

  return (
    <AppContainer>
      <UserList users={usersWithColor} />

      <AddUserForm colors={colors} addUser={addUser} />
    </AppContainer>
  );
};
