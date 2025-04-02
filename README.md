# Todo List TypeScript Application

A simple command-line todo list application built with TypeScript.

## Features

- Add new todo items
- Remove todo items by ID
- Display the current todo list
- Automatic ID generation
- Timestamp tracking for todo creation

## Project Structure

- `todo.ts` - Main application file containing Todo interface and TodoList class
- `package.json` - Project configuration and dependencies
- `tsconfig.json` - TypeScript configuration

## Installation

1. Clone this repository
2. Install dependencies:

## How to run the app
1. Run the development server with live reload:
   ```bash
   npm run dev
   ```

2. Or build and run the production version:
   ```bash
   npm run build
   npm start
   ```

The app will start and you can:
- Add todos by calling `todoList.add("Your todo item")`
- Remove todos by calling `todoList.remove(id)`
- Display the current list with `todoList.display()`

