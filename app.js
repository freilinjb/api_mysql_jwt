require('dotenv').config();
const express = require('express');
const app = express();

//callback
app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: 'This is rest apis working'
    });
});

// app.set('port', process.env.PORT || 3000);
app.set('port', process.env.APP_PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});