import React, { useState } from 'react';
import UserMenu from '../components/UserMenu';
import {
  Pagination,
  Stack,
  Box,
  Collapse,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Button,
  LinearProgress,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelIcon from '@mui/icons-material/Cancel';

const Stories = () => {
  const rows = [
    { id: 1, date: '21.08.2024', time: '43 мин' },
    { id: 2, date: '18.08.2024', time: '30 мин' },
    { id: 3, date: '22.08.2024', time: '55 мин' },
    { id: 4, date: '23.08.2024', time: '40 мин' },
  ];
  const [selected, setSelected] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openDialog, setOpenDialog] = useState('');

  const handleCheck = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
  };

  const strengthsTabs = [
    [
      { label: 'Стресс', value: 32 },
      { label: 'Энергия', value: 88 },
      { label: 'Гибкость', value: 61 },
    ],
    [
      { label: 'Настойчивость', value: 57 },
      { label: 'Целеустремленность', value: 73 },
      { label: 'Интроспекция', value: 40 },
    ],
  ];

  const renderProgressList = (data) => (
    <Paper variant="medium1">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        {data.map(({ label, value }) => (
          <Box key={label} sx={{ mb: 2 }}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}
            >
              <Typography variant="body">{label}</Typography>
              <Typography variant="body">{value}%</Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={value}
              sx={{
                height: 30,
                borderRadius: 8,
                backgroundColor: '#F0F2FA',
                '& .MuiLinearProgress-bar': { backgroundColor: '#5D5FEF' },
              }}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );

  const renderNoteBlock = (text) => (
    <Paper variant="medium4">
      <Typography variant="body">{text}</Typography>
    </Paper>
  );

  const visibleUsers = compareMode
    ? selected
    : selectedRowIndex !== null
    ? [selectedRowIndex + 1]
    : [];

  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        padding: 4,
        backgroundColor: '#F4F7FE',
        minWidth: 'auto',
        overflow: 'auto',
        }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 0,
        }}
        >
        <Typography variant="h1">Мои результаты</Typography>
        <UserMenu />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mb: 2,
          gap: 2,
          mt: 4,
        }}
        >
        <Button variant="purpleLarge">Экспорт</Button>
        <Button
            variant="compare"
            disabled={selected.length !== 2}
            sx={{
              backgroundColor: selected.length === 2 ? '#4318FF' : '#E0E0E0',
              color: selected.length === 2 ? '#FFFFFF' : '#9E9E9E',
              '&:hover': {
                backgroundColor: selected.length === 2 ? '#3b14cc' : '#E0E0E0',
              },
              textTransform: 'none'
              }}
              onClick={() => {
              setCompareMode(true);
              setSelectedRowIndex(null);
              }}
              >
          Сравнить
        </Button>
        {compareMode && (
          <IconButton
            onClick={() => {
              setCompareMode(false);
              setSelected([]);
              setSelectedRowIndex(null);
            }}
          >
            <CancelIcon />
          </IconButton>
        )}
      </Box>

      <Paper
        sx={{
          borderRadius: '16px',
          boxShadow: 'none',
          mb: 2,
          overflow: 'hidden',
        }}
        >
        <TableContainer>
          <Table
            sx={{ 
              minWidth: 'auto', 
              borderCollapse: 'separate', 
              borderSpacing: 0 
            }}
            >
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell>№</TableCell>
                <TableCell align="right">Дата</TableCell>
                <TableCell align="right">Время</TableCell>
                <TableCell align="right">Результат</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  hover
                  sx={{
                    backgroundColor: index % 2 === 1 ? '#FAFAFB' : '#fff',
                    borderBottom: 'none',
                    '& td': { borderBottom: 'none' },
                    '&:last-child td, &:last-child th': {
                      borderBottom: 'none',
                    },
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selected.includes(row.id)}
                      onChange={() => handleCheck(row.id)}
                      disabled={compareMode}
                    />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="purpleOutlined"
                      onClick={() =>
                        setSelectedRowIndex((prev) =>
                          prev === index ? null : index
                        )
                      }
                      disabled={compareMode}
                    >
                      {selectedRowIndex === index ? 'Скрыть' : 'Показать'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {visibleUsers.length > 0 && (
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: compareMode ? 'row' : 'column',
            gap: 4,
          }}
        >
          {visibleUsers.map((userId, i) => (
            <Box key={userId} sx={{ flex: 1 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}
              >
                <Typography variant="h5" sx={{ flex: 1 }}>
                  {compareMode
                    ? `Пользователь #${userId}`
                    : `Результаты пользователя #${userId}`}
                </Typography>
                <Button
                  variant="purpleSmall"
                  onClick={() => setOpenDialog('summary')}
                >
                  Краткий вывод
                </Button>
                <Button
                  variant="purpleSmall"
                  onClick={() => setOpenDialog('recommend')}
                >
                  Рекомендации
                </Button>
                <IconButton
                  onClick={() => setActiveTab((prev) => (prev === 0 ? 1 : 0))}
                >
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={() => setActiveTab((prev) => (prev === 1 ? 0 : 1))}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Box>
              {renderProgressList(strengthsTabs[activeTab])}
              {renderNoteBlock(
                compareMode
                  ? `Комментарий для пользователя ${i + 1}`
                  : 'Здесь может быть аналитический вывод по результатам пользователя.'
              )}
            </Box>
          ))}
        </Box>
      )}

      <Dialog
        open={Boolean(openDialog)}
        onClose={() => setOpenDialog('')}
        PaperProps={{ sx: { borderRadius: '16px' } }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {openDialog === 'summary' ? 'Краткий вывод' : 'Рекомендации'}
          <IconButton edge="end" onClick={() => setOpenDialog('')}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            Здесь будет содержимое всплывающего окна с текстом по разделу "
            {openDialog === 'summary' ? 'Краткий вывод' : 'Рекомендации'}"
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog('')}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Stories;
