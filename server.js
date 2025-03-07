const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

// Example route - Get all items
app.get('/api/items', (req, res) => {
    const items = [
        { id: 1, name: 'Item 1', description: 'Description 1' },
        { id: 2, name: 'Item 2', description: 'Description 2' },
        { id: 3, name: 'Item 3', description: 'Description 3' }
    ];
    res.json(items);
});

// Example route - Create new item
app.post('/api/items', (req, res) => {
    const { name, description } = req.body;
    // Here you would typically save to a database
    const newItem = {
        id: Date.now(), // Simple way to generate unique id
        name,
        description
    };
    res.status(201).json({ message: 'Item created successfully', item: newItem });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 