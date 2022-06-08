import { TextField, Stack, Card, CardHeader, Button, FormHelperText } from '@mui/material';
import React, { useState } from 'react';
import {login} from '../services/newsServices'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit= ()=>{
    console.log(email, password)
    login(email,  password)
}
  return (
    <div>
      <h1 style={styleTitle}>Iniciar sesión</h1>
      <Card style={formLogin}>
        <CardHeader title="Log in to continue:" color='red' style={styleCardHeader}/>
        <Stack spacing={2}>
         
          <>
            <TextField
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              placeholder="Enter email"
            />
            <TextField
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              placeholder="Enter password"
              type="password"                 
            />
          </> 
         
          
          <Button style={styleButton}
           onClick={handleSubmit}
            disabled={
              password.length === 0 ||
              email.length === 0
            }
            variant="contained"
            color="primary"
          >
          Login
          </Button>
        </Stack>
      </Card>
    </div>
  )
}

const formLogin = {
  width: "34%",
  alignItems: "center",
  marginLeft: "33%",
  marginTop: "3%",
  paddingTop: "1%",
  padding: "1%",
}

const styleTitle = {
  alignItems: "center",
  marginLeft: "45%",
  marginTop: '10%',
  fontSize: "50px"
}

const styleButton = {
  marginBottom: "5%",
  width: "50%",
  marginLeft: "25%"
}

const styleCardHeader = {
  alignItems: "center",
  marginLeft: "28%",
  color: "gray"
}

export default Login;
