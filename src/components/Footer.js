import React from 'react';

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function Footer() {
  return (
    <AppBar position="absolute" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
      >
        <Button color="inherit" href='https://github.com/NoahBrimhall6'>github</Button>
        <Button color="inherit" href='/'>linkedin</Button>
        <Button color="inherit" href='/'>stackoverflow</Button>
      </Stack>
      </Toolbar>
    </AppBar>
  )
}
