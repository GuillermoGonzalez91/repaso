import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`El usuario es ${username} y la contraseña es ${password}`);
    // Aquí puedes enviar la información a un servidor o hacer alguna acción adicional
  }
return (

<form onSubmit={handleSubmit}>
      <TextField
        id="username"
        label="Usuario"
        type='password'
        variant="outlined"
        value={username}
        onChange={handleUsernameChange}
      />
      <br /><br />
      <TextField
        id="password"
        label="Contraseña"
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
      />
      <br /><br />

<Button variant = "contained" color = "primary" type = "submit">
un boton
</Button>

<Button variant="contained" color = " primary" type = "submit">
    segundo boton
</Button>

</form>

);


}