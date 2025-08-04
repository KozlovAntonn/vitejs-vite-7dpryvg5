import React from 'react';
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  IconButton,
  Stack,
  Divider,
  Switch,
  FormControlLabel,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

const Autorization = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Верхний блок с фоном */}
      <Box
        sx={{
          height: 300,
          background: 'linear-gradient(135deg, #7771dd 0%, #473df9 100%)',
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        <Typography variant="h7">Рады видеть вас</Typography>
        <Typography variant="body2" mt={1}>Авторизуйтесь для доступа к платформе</Typography>
      </Box>

      {/* Центрированный блок с формой */}
      <Box
        sx={{
          maxWidth: 400,
          mx: 'auto',
          mt: -10,
          backgroundColor: '#fff',
          borderRadius: 3,
          boxShadow: 3,
          p: 4,
          textAlign: 'center'
        }}
        >
        <Typography variant="h2">Авторизация</Typography>

        <Divider sx={{ my: 3 }}></Divider>

        <Stack spacing={2}>
          <TextField fullWidth placeholder="Your email address" label="Email" variant="outlined" size="small" />
          <TextField fullWidth placeholder="Your password" label="Password" variant="outlined" size="small" type="password" />
        </Stack>

        <FormControlLabel
          control={<Switch defaultChecked color="primary" />}
          label={<Typography variant="body1">Запомнить меня</Typography>}
          sx={{ mt: 2, justifyContent: 'center' }}
        />

        <Button fullWidth variant="purpleLarge" sx={{ mt: 2 }}>Войти</Button>
        <Typography
          variant="body2"
          sx={{ mt: 2, cursor: 'pointer', color: '#473df9' }}
          onClick={() => navigate('/passwordreset')}
          >
          Забыли пароль?
        </Typography>
      </Box>
    </Box>
  );
};

export default Autorization;