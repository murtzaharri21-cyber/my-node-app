const express = require('express');
const app = express();
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Server is running on port 3001');
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received successfully',
        receivedData: data
    });
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});