const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const quizData = JSON.parse(fs.readFileSync('quiz_data.json'));

// Route for retrieving quiz questions
app.get('/quiz/questions', (req, res) => {
  res.json({ questions: quizData });
});

// Route for submitting quiz answers
app.post('/quiz/answers', (req, res) => {
  const userAnswers = req.body;
  let score = 0;

  for (const questionId in userAnswers) {
    const correctAnswer = quizData[questionId].correctAnswer;
    const userAnswer = userAnswers[questionId];

    if (correctAnswer === userAnswer) {
      score++;
    }
  }

  res.json({ score });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
