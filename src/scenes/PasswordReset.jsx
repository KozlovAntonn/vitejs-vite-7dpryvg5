import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Stack,
} from '@mui/material';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить API-запрос на восстановление
    setOpenDialog(true);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Верхняя часть */}
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
        <Typography variant="h7">Забыли пароль?</Typography>
        <Typography variant="body2" mt={1}>Введите свою почту для восстановления доступа</Typography>
      </Box>

      {/* Форма */}
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
        <Typography variant="h2">Восстановление пароля</Typography>

        <Divider sx={{ my: 3 }} />

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Введите вашу почту"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" fullWidth variant="purpleLarge">
              Восстановить пароль
            </Button>
          </Stack>
        </form>
      </Box>

      {/* Модальное окно подтверждения */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Проверьте почту</DialogTitle>
        <DialogContent>
          <Typography variant="body1" mb={2}>
            Мы отправили вам ссылку для сброса пароля. Если письмо не пришло, проверьте папку «Спам».
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="purpleOutlined" onClick={() => setOpenDialog(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PasswordReset;
