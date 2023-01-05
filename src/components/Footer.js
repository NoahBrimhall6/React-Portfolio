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
        <Button color="inherit" href='https://www.linkedin.com/in/noah-brimhall-6680a0245/'>linkedin</Button>
        <Button color="inherit" href='https://stackoverflow.com/users/19530003/noahbrimhall'>stackoverflow</Button>
      </Stack>
      </Toolbar>
    </AppBar>
  )
}
