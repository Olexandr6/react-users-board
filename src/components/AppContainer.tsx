import React, { FC } from 'react';
import { Divider, Paper, Typography } from '@mui/material';

interface Props {
  children: React.ReactNode
}

export const AppContainer: FC<Props> = React.memo(({ children }) => {
  return (
    <Paper
      elevation={10}
      style={{
        padding: '20px',
        width: '90%',
        marginTop: '40px',
        marginInline: 'auto',
      }}
    >
      <Typography
        variant="h2"
        style={{ textAlign: 'center', marginBottom: '16px' }}
      >
        Users`
        board
      </Typography>

      {children}

      <Divider />
    </Paper>
  );
});
