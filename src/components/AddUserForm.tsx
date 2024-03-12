import React, { useEffect, useState } from 'react';
import {
  Divider, MenuItem, Select, TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Color } from '../types';
import { getColors } from '../services/color.service';

interface Props {
  addUser: (name: string, carColorId: number) => void;
}

export const AddUserForm: React.FC<Props> = ({ addUser }) => {
  const [name, setName] = useState('');
  const [colorId, setColorId] = useState(0);
  const [isNameError, setIsNameError] = useState(false);
  const [isColorError, setIsColorError] = useState(false);
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    getColors().then(setColors);
  }, []);

  const selectedColor = colors.find(c => c.id === colorId);

  const onSubmit = () => {
    if (!name || !colorId) {
      setIsNameError(!name);
      setIsColorError(!colorId);

      return;
    }

    addUser(name, colorId);

    setName('');
    setColorId(0);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Divider />

      <div
        style={{
          padding: '16px 0 16px',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'space-between',
        }}
      >
        <TextField
          variant="standard"
          label="Name"
          style={{ width: '45%' }}
          value={name}
          onChange={e => {
            setName(e.target.value);
            setIsNameError(false);
          }}
          error={isNameError}
        />

        <Select
          label="Car color"
          style={{ width: '45%', color: selectedColor?.name || 'currentColor' }}
          variant="standard"
          value={colorId}
          onChange={e => {
            setIsColorError(false);
            setColorId(+e.target.value);
          }}
          error={isColorError}
        >
          <MenuItem value={0} disabled>
            Color
          </MenuItem>
          {colors.map(color => (
            <MenuItem
              key={color.id}
              style={{ color: color.name }}
              value={color.id}
            >
              {color.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <LoadingButton type="submit" variant="outlined" style={{ width: '100%' }}>
        Add new player
      </LoadingButton>
    </form>
  );
};
