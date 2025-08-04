import React, { useState } from 'react';
import UserMenu from '../components/UserMenu';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
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
  [
    { label: 'Внимательность', value: 66 },
    { label: 'Уверенность', value: 80 },
    { label: 'Дисциплина', value: 59 },
  ],
];

const Stories = () => {
  const [selectedRows, setSelectedRows] = useState({ 1: [], 2: [] });
  const [expandedRow, setExpandedRow] = useState({ 1: null, 2: null });
  const [activeTab, setActiveTab] = useState({
    1: 0,
    2: 0,
    compareLeft: 0,
    compareRight: 0,
  });
  const [openDialog, setOpenDialog] = useState({ 1: '', 2: '' });
  const [openCompareDialog, setOpenCompareDialog] = useState(false);

  const totalSelected = [...selectedRows[1], ...selectedRows[2]];

  const handleCheck = (columnIndex, id) => {
    setSelectedRows((prev) => ({
      ...prev,
      [columnIndex]: prev[columnIndex].includes(id)
        ? prev[columnIndex].filter((el) => el !== id)
        : [...prev[columnIndex], id],
    }));
  };

  const toggleExpand = (columnIndex, id) => {
    setExpandedRow((prev) => ({
      ...prev,
      [columnIndex]: prev[columnIndex] === id ? null : id,
    }));
  };

  const userData = {
    1: [
      { id: 1, date: '21.08.2024', time: '43 мин' },
      { id: 2, date: '18.08.2024', time: '30 мин' },
    ],
    2: [
      { id: 3, date: '22.08.2024', time: '55 мин' },
      { id: 4, date: '23.08.2024', time: '40 мин' },
    ],
  };

  const renderProgressList = (columnIndex, tabIndex) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {strengthsTabs[tabIndex].map(({ label, value }) => (
          <Box key={label}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
    );
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#F4F7FE', minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
        >
        <Typography variant="h1">Результаты</Typography>
        <UserMenu />
      </Box>

      {/* Кнопки Экспорт и Сравнить */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 2 }}>
        <Button variant="purpleLarge">Экспорт</Button>
        <Button
          variant="compare"
          disabled={totalSelected.length !== 2}
          sx={{
            backgroundColor: totalSelected.length === 2 ? '#473df9' : '#E0E0E0',
            color: totalSelected.length === 2 ? '#ffffff' : '#9E9E9E',
            '&:hover': {
              backgroundColor: totalSelected.length === 2 ? '#3b32d6' : '#E0E0E0',
            },
            textTransform: 'none',
            boxShadow: 'none'
          }}
          onClick={() => setOpenCompareDialog(true)}
          >
          Сравнить
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {[1, 2].map((columnIndex) => (
          <Box key={columnIndex} sx={{ flex: 1, minWidth: '360px' }}>
            <Paper variant="medium5">
              <Typography variant="h5">{`Выберите ${columnIndex}`}</Typography>
              <select
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1px solid #E0E6F5',
                  fontSize: '14px',
                  color: '#1E1E4B',
                  background: '#F9FAFB',
                  marginTop: '10px',
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Выберите из списка
                </option>
                <option value="sales">Отдел продаж</option>
                <option value="marketing">Отдел маркетинга</option>
                <option value="ivanov">Иванов Иван</option>
                <option value="petrova">Петрова Светлана</option>
                <option value="smirnov">Смирнов Алексей</option>
                <option value="kuznetsova">Кузнецова Анна</option>
                <option value="dyakov">Дьяков Максим</option>
                <option value="sorokina">Сорокина Елена</option>
              </select>
            </Paper>

            <Paper sx={{ borderRadius: '16px', boxShadow: 'none', mb: 2 }}>
              <TableContainer>
                <Table
                  sx={{
                    width: '100%',
                    fontSize: '12px',
                    borderCollapse: 'separate',
                    borderSpacing: 0,
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
                    {userData[columnIndex].map((row) => (
                      <TableRow key={row.id}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedRows[columnIndex].includes(row.id)}
                            onChange={() => handleCheck(columnIndex, row.id)}
                          />
                        </TableCell>
                        <TableCell>{row.id}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                        <TableCell align="right">
                          <Button
                            variant="purpleOutlined"
                            onClick={() => toggleExpand(columnIndex, row.id)}
                          >
                            {expandedRow[columnIndex] === row.id
                              ? 'Скрыть'
                              : 'Показать'}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            {expandedRow[columnIndex] && (
              <Paper variant="medium1">
                <Typography variant="h4">{`№${expandedRow[columnIndex]} | ${
                  userData[columnIndex].find(
                    (r) => r.id === expandedRow[columnIndex]
                  ).date
                }`}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="purpleSmall"
                      onClick={() =>
                        setOpenDialog({
                          ...openDialog,
                          [columnIndex]: 'summary',
                        })
                      }
                    >
                      Краткий вывод
                    </Button>
                    <Button
                      variant="purpleSmall"
                      onClick={() =>
                        setOpenDialog({
                          ...openDialog,
                          [columnIndex]: 'recommend',
                        })
                      }
                    >
                      Рекомендации
                    </Button>
                  </Box>
                  <Box>
                    <IconButton
                      onClick={() =>
                        setActiveTab((prev) => ({
                          ...prev,
                          [columnIndex]: (prev[columnIndex] + 2) % 3,
                        }))
                      }
                    >
                      <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        setActiveTab((prev) => ({
                          ...prev,
                          [columnIndex]: (prev[columnIndex] + 1) % 3,
                        }))
                      }
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                {renderProgressList(columnIndex, activeTab[columnIndex])}
                <Paper
                  sx={{
                    mt: 2,
                    p: 2,
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                  }}
                >
                  <Typography variant="body">
                    Здесь может быть аналитический вывод по результатам
                    пользователя {columnIndex}.
                  </Typography>
                </Paper>
              </Paper>
            )}
          </Box>
        ))}
      </Box>

      <Dialog
        open={openCompareDialog}
        onClose={() => setOpenCompareDialog(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3">Сравнение результатов</Typography>
          <IconButton onClick={() => setOpenCompareDialog(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', gap: 4 }}>
          {totalSelected.slice(0, 2).map((selectedId, idx) => {
            const row = Object.values(userData)
              .flat()
              .find((r) => r.id === selectedId);
            const isLeft = idx === 0;
            const tabKey = isLeft ? 'compareLeft' : 'compareRight';
            return (
              <Box key={idx} sx={{ flex: 1 }}>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, mb: 2 }}
                >{`№${row.id} | ${row.date}`}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="purpleSmall"
                      sx={{
                        fontSize: 10,
                        borderRadius: '8px',
                        backgroundColor: '#473df9',
                        color: '#fff',
                      }}
                    >
                      Краткий вывод
                    </Button>
                    <Button
                      variant="purpleSmall"
                      sx={{
                        fontSize: 10,
                        borderRadius: '8px',
                        backgroundColor: '#473df9',
                        color: '#fff',
                      }}
                    >
                      Рекомендации
                    </Button>
                  </Box>
                  <Box>
                    <IconButton
                      onClick={() =>
                        setActiveTab((prev) => ({
                          ...prev,
                          [tabKey]: (prev[tabKey] + 2) % 3,
                        }))
                      }
                    >
                      <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        setActiveTab((prev) => ({
                          ...prev,
                          [tabKey]: (prev[tabKey] + 1) % 3,
                        }))
                      }
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                {renderProgressList(0, activeTab[tabKey])}
                <Paper
                  sx={{
                    mt: 2,
                    p: 2,
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: 14 }}>
                    Здесь может быть аналитический вывод по результатам
                    пользователя №{row.id}.
                  </Typography>
                </Paper>
              </Box>
            );
          })}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Stories;
