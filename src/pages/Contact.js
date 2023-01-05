import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    nameError: false,
    emailError: false,
    messageError: false,
    formatError: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value})
  };

  const handleSubmit = (event) => {
    let nameError = false;
    let emailError = false;
    let messageError = false;
    let formatError = false;

    event.preventDefault();
    if (form.name === '') {
      nameError = true;
    }
    if (form.email === '') {
      emailError = true;
    }
    if (form.message === '') {
      messageError = true;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      formatError = true;
    }

    setForm({ ...form, nameError, emailError, messageError, formatError});

    console.log(form);
  }

  return (
    <Container maxWidth='sm' sx={{ marginY: 6 }}>
      <Paper elevation={12}>
        <Box padding={2}>
          <Typography variant='h4' gutterBottom>
            Contact
          </Typography>
          <Stack spacing={2}>
            <TextField
              error={form.nameError}
              helperText={form.nameError ? 'Required' : ''}
              required
              name='name'
              value={form.name}
              onChange={handleChange}
              label='Name'
            />
            <TextField
              error={form.emailError || form.formatError}
              helperText={form.emailError ? 'Required' : form.formatError ? 'Invalid Email Adress' : ''}
              required
              name='email'
              value={form.email}
              onChange={handleChange}
              label='Email'
            />
            <TextField
              error={form.messageError}
              helperText={form.messageError ? 'Required' : ''}
              name='message'
              value={form.message}
              onChange={handleChange}
              label='Message'
              required
              multiline
              maxRows={12}
            />
            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  )
}
