# Project README

This project integrates MeiliSearch with a Python FastAPI backend and a React frontend, styled with Tailwind CSS. It offers efficient search capabilities, a modern UI, and secure data handling.

## Setup Instructions

### Backend:

1. Install dependencies using Poetry: `poetry install`
2. Start the FastAPI server: `uvicorn main:app --reload`

### Frontend:

1. Navigate to the frontend directory: `cd frontend`
2. Install pnpm packages: `pnpm install`
3. Start the React app: `pnpm start`

Visit `http://localhost:3000` in your browser to view the app.

## ESLint Configuration Expansion

- Update ESLint configuration to enable type-aware lint rules as per the provided guidelines in the README.

## Additional ESLint Configuration

- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.
- Install `eslint-plugin-react` and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

## HTML Structure

- The HTML structure includes a root `div` with an ID of "root" and a script importing the main TypeScript file.

## CSS Styling

- CSS styles for the app, including styling for the root element, logo animations, media queries, and more.

## TypeScript Files

- TypeScript files for the main app component, components like Carousel, Form, Toast, Menubar, and more.

## Python Files

- Python script for indexing data in MeiliSearch.

## Testing

- Test script for querying MeiliSearch for movie titles.

For detailed setup instructions and code snippets, refer to the specific files in the codebase.
