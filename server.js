const express = require('express');
const cors = require('cors');
const http = require('http');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 10000; // Default to 10000 as recommended
const host = '0.0.0.0'; // Bind to all network interfaces

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

// Create HTTP server with proper timeout settings
const server = http.createServer(app);

// Set higher timeout values as recommended
server.keepAliveTimeout = 120000; // 120 seconds
server.headersTimeout = 120000; // 120 seconds

// Start the server
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
}); 