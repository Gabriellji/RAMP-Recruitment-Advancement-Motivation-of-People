const express = require('express');

const app = express();
const cors = require('cors');
const userRouter = require('./resources/user/user.router');
const authRouter = require('./resources/user/auth.router');
const profileRouter = require('./resources/profile/profile.router');
const statusRouter = require('./resources/status/status.router');
const emailRouter = require('./resources/emailer/email.router');

app.use(cors());

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.json({ message: 'Service is running!' });
    return;
  }
  next();
});

app.use('/registration', userRouter);
app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/status', statusRouter);
app.use('/', emailRouter);

module.exports = app;
