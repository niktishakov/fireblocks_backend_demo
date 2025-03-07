const request = require('supertest');

const localUrl = 'http://localhost:10000'; // Updated port
const deployedUrl = 'https://fireblocks-backend-demo.onrender.com';

// Increase test timeout
jest.setTimeout(30000); // 30 seconds timeout for tests

describe('API Tests (Deployed)', () => {
  // Test the root endpoint
  test('GET / should return welcome message', async () => {
    const response = await request(deployedUrl).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Welcome to the API!');
  });

  // Test getting items
  test('GET /api/items should return array of items', async () => {
    const response = await request(deployedUrl).get('/api/items');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // Test creating a new item
  test('POST /api/items should create a new item', async () => {
    const newItem = {
      name: 'Test Item',
      description: 'Test Description'
    };

    const response = await request(deployedUrl)
      .post('/api/items')
      .send(newItem)
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Item created successfully');
    expect(response.body).toHaveProperty('item');
    expect(response.body.item).toHaveProperty('name', newItem.name);
    expect(response.body.item).toHaveProperty('description', newItem.description);
  });
}); 