# Learning document based search with MeiliSearch

This project integrates MeiliSearch with a Python FastAPI backend and a React frontend, styled with Tailwind CSS. It offers efficient search capabilities, a modern UI, and secure data handling.

## Setup Instructions

### Backend

1. Install dependencies using Poetry: `poetry install`
2. Start the FastAPI server: `uvicorn main:app --reload`

### Frontend

1. Navigate to the frontend directory: `cd frontend`
2. Install pnpm packages: `pnpm install`
3. Start the React app: `pnpm run dev`

Visit `http://localhost:5173` in your browser to view the app.

## TypeScript Files

- TypeScript files for the main app component, components like Carousel, Form, Toast, Menubar, and more.

## Python Files

- Python script for indexing data in MeiliSearch.

## Testing

- Test script for querying MeiliSearch for movie titles.
