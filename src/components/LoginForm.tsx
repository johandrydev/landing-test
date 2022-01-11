import { Box, Container, Fab, Grid, TextField } from '@mui/material';
import { userLogout, userUpdate } from '../context/actions/userActions';
import { useUserContext } from '../context/userContext';
import { loginWithGoogle, logout } from '../firebase/client';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';

const LoginForm = () => {
  const { userDispatch } = useUserContext();

  const handleLoginWithGoogle = () => {
    loginWithGoogle().then(userfirebase => {
      userfirebase.user.getIdToken().then(token => {
        const user = {
          email: userfirebase.user.email,
          token
        };
        userDispatch(userUpdate(user));
      }).catch(err => console.warn(err))
    }).catch(err => console.warn(err))
  };

  return (
    <Container
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: '100%'
      }}
    >
      <Box
        component="form"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid item xs={12}>
          <TextField
            color="success"
            id="email"
            label="Email"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            type="password"
            label="Password"
            color="success"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <Fab variant="extended" size='small' className='btn-login' onClick={handleLoginWithGoogle}>
            <LoginIcon sx={{ fontSize: 18, mr: 1 }} />
            Login
          </Fab>
        </Grid>
        <Grid item xs={12}>
          <Fab variant="extended" size='small' className='btn-google' onClick={handleLoginWithGoogle}>
            <GoogleIcon sx={{ fontSize: 18, mr: 1 }} />
            Ingresa con google
          </Fab>
        </Grid>
      </Box>
    </Container>
  );
};
export default LoginForm
