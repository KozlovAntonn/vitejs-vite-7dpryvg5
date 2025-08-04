import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  Modal,
  TextField,
  IconButton,
  Input,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Settings = () => {
  const [openEditAvatar, setOpenEditAvatar] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [avatar, setAvatar] = useState('https://i.pravatar.cc/100');

  const [formData, setFormData] = useState({
    name: 'Карен Смирнов',
    age: '39 лет',
    department: 'Отдел логистики',
    position: 'Руководитель отдела логистики',
    city: 'Москва',
    email: 'smirno@rambler.ru',
    phone: '+79221344444',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setAvatar('');
  };

  const handleCloseEditAvatar = () => setOpenEditAvatar(false);
  const handleCloseEditProfile = () => setOpenEditProfile(false);

  return (
    <Box sx={{ padding: 4, backgroundColor: '#F4F7FE', minHeight: '100vh' }}>
      {/* Заголовок */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h1">Профиль</Typography>
      </Box>

    {/* Профиль */}
    <Paper sx={{ display: 'flex', alignItems: 'center', padding: 3, borderRadius: '16px', mb: 4, boxShadow: 'none', position: 'relative' }}>
        <Box sx={{ mr: 2 }}>
          <Avatar
            src={avatar}
            alt="User Avatar"
            sx={{ width: 64, height: 64 }}
          />
        </Box>
        <Box>
          <Typography variant="h2">{formData.name}</Typography>
          <Typography variant="h5">{formData.email}</Typography>
        </Box>
        <Box sx={{ marginLeft: 'auto' }}>
          <Button variant="purpleOutlined" onClick={() => setOpenEditProfile(true)}>Изменить</Button>
        </Box>
    </Paper>

      {/* Информация профиля */}
      <Paper variant="medium1">
        <Typography variant="h3">Информация</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="h6">Имя:</Typography>
            <Typography variant="body1">{formData.name}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Возраст:</Typography>
            <Typography variant="body1">{formData.age}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Отдел:</Typography>
            <Typography variant="body1">{formData.department}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Должность:</Typography>
            <Typography variant="body1">{formData.position}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Город:</Typography>
            <Typography variant="body1">{formData.city}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Email:</Typography>
            <Typography variant="body1">{formData.email}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Телефон:</Typography>
            <Typography variant="body1">{formData.phone}</Typography>
          </Box>
        </Box>
      </Paper>

      {/* Модальное окно редактирования ПРОФИЛЯ с управлением аватаром */}
      <Modal open={openEditProfile} onClose={handleCloseEditProfile}>
        <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, p: 4, borderRadius: '16px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h3">Редактировать профиль</Typography>
            <IconButton onClick={handleCloseEditProfile}><CloseIcon /></IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Avatar
              src={avatar}
              alt="User Avatar"
              sx={{ width: 100, height: 100, mx: 'auto' }}
              />
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button component="label" variant="purpleLarge">Выбрать другое фото
                <Input type="file" sx={{ display: 'none' }} onChange={handleAvatarChange} />
              </Button>
              <Button variant="purpleOutlined" color="error" onClick={handleRemoveAvatar}>Удалить</Button>
            </Box>
            <TextField label="Имя" name="name" value={formData.name} onChange={handleChange} fullWidth />
            <TextField label="Возраст" name="age" value={formData.age} onChange={handleChange} fullWidth />
            <TextField label="Отдел" name="department" value={formData.department} onChange={handleChange} fullWidth />
            <TextField label="Должность" name="position" value={formData.position} onChange={handleChange} fullWidth />
            <TextField label="Город" name="city" value={formData.city} onChange={handleChange} fullWidth />
            <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
            <TextField label="Телефон" name="phone" value={formData.phone} onChange={handleChange} fullWidth />
            <Button variant="purpleLarge" onClick={handleCloseEditProfile}>Сохранить</Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};

export default Settings;