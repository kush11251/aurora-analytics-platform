const express = require('express');
const app = express();
const metricsController = require('./controllers/metrics');
const port = 3000;
app.use(express.json());
app.use('/metrics', metricsController);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});