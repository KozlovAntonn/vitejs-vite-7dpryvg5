import React, { useState } from 'react';
import UserMenu from '../components/UserMenu';
import Slide from '@mui/material/Slide';
import {
  Box,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  LinearProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const tests = [
  {
    id: 1,
    questions: [
      'Я не всегда могу реализовать свои планы из-за внешних обстоятельств',
      'Когда я быстро реализую большой объем работы, я периодически поощряю себя подарками',
      'Я регулярно делаю что-то, чтобы улучшить свою физическую форму.'
    ]
  },
  {
    id: 2,
    questions: [
      'Чтобы улучшить свою работу, я наблюдаю, как ведут себя другие высокоэффективные люди.',
      'Я стараюсь следовать распорядку дня.',
      'Я умею быстро переключаться между задачами.',
      'Я оцениваю эффективность своей работы регулярно.',
      'Я отслеживаю прогресс по своим целям.'
    ]
  },
  {
    id: 3,
    questions: [
      'Я умею сохранять спокойствие в стрессовых ситуациях.',
      'Я быстро восстанавливаюсь после неудач.',
      'Я получаю удовольствие от сложных задач.',
      'Я умею говорить «нет», когда это необходимо.',
      'Я легко концентрируюсь на задаче.',
      'Я не откладываю важные дела на потом.'
    ]
  }
];

const options = ['Неверно', 'Отчасти верно', 'Довольно верно', 'Совершенно верно'];

const Test = () => {
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const currentTest = tests[currentTestIndex];
  const totalTests = tests.length;
  const totalQuestions = tests.reduce((acc, t) => acc + t.questions.length, 0);
  const answeredCount = Object.keys(answers).length;

  const handleChange = (questionIndex, value) => {
    const key = `t${currentTest.id}_q${questionIndex}`;
    setAnswers({ ...answers, [key]: value });
    setError(null);
  };

  const handleNext = () => {
    const unanswered = currentTest.questions.findIndex((_, index) => {
      const key = `t${currentTest.id}_q${index}`;
      return !answers[key];
    });
    if (unanswered !== -1) {
      setError(`Ответьте на вопрос №${unanswered + 1} перед продолжением.`);
      return;
    }
    setError(null);
    if (currentTestIndex < totalTests - 1) {
      setCurrentTestIndex(currentTestIndex + 1);
    } else {
      setDialogOpen(true);
    }
  };

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

  const handleCloseDialog = () => {
  setDialogOpen(false);
  setTimeout(() => {
    navigate('/');
  }, 2000); // 2000 мс = 2 секунды
};

  return (
    <Box sx={{ padding: 4, backgroundColor: '#F4F7FE', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h1">Тест</Typography>
        <UserMenu />
      </Box>
      <Paper sx={{ maxWidth: 800, margin: '0 auto', borderRadius: '16px', padding: 4, position: 'relative' }}>
        <LinearProgress
          variant="determinate"
          value={(answeredCount / totalQuestions) * 100}
          sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, borderRadius: '16px 16px 0 0' }}
        />
        <Typography variant="h3">Отвечайте быстро, что первое приходит в голову</Typography>

        {currentTest.questions.map((question, index) => {
          const key = `t${currentTest.id}_q${index}`;
          return (
            <Box key={key} sx={{ mb: 3 }}>
              <Typography variant="h5">{index + 1}. {question}</Typography>
              <RadioGroup
                value={answers[key] || ''}
                onChange={(e) => handleChange(index, e.target.value)}
                >
                {options.map((option) => (
                  <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                ))}
              </RadioGroup>
            </Box>
          );
        })}

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="purpleLarge" onClick={handleNext}>{currentTestIndex === totalTests - 1 ? 'Завершить' : 'Далее'}</Button>
        </Box>
      </Paper>

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        keepMounted
        >
        <DialogTitle>Благодарим за прохождение теста</DialogTitle>
        <DialogContent>
          <Typography variant="h5">Ваши ответы сохранены. Сейчас вы будете перенаправлены на главную страницу.</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="purpleLarge" onClick={handleCloseDialog}>На главную</Button>
            </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Test;