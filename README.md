# Simple Backend API

A basic Node.js/Express backend API with example endpoints.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with:
```
PORT=3000
```

3. Run the server:
```bash
npm start
```

## Deployment Instructions (Render.com)

1. Create a free account on [Render.com](https://render.com)
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Fill in the deployment details:
   - Name: simple-backend
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Click "Create Web Service"

## API Endpoints

- GET `/` - Welcome message
- GET `/api/items` - Get all items
- POST `/api/items` - Create a new item 