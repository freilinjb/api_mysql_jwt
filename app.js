require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router');


app.use(express.json());
app.use("/api/users", userRouter);

// app.set('port', process.env.PORT || 3000);
app.set('port', process.env.APP_PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});