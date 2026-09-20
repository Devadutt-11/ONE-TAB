# ONE-TAB

ONE-TAB is a lightweight browser dashboard built with Vite. It provides a focused new-tab style page with a NASA Astronomy Picture of the Day background, a live clock, Google search, and quick links to commonly used sites.

## Features

- Displays the NASA Astronomy Picture of the Day as the background.
- Supports NASA image and video media responses.
- Shows the APOD title and explanation.
- Displays the current date and time.
- Searches Google by pressing Enter in the search box.
- Provides quick links for YouTube, GitHub, Stardance, and Instagram.
- Includes hover effects for app icons and the search box.

## Requirements

- Node.js 18 or newer
- A NASA API key from [api.nasa.gov](https://api.nasa.gov/)

## Getting Started

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   VITE_NASA_API_KEY=your_nasa_api_key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown by Vite in your browser.

## Available Commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
```

## Project Structure

```text
index.html        Main page markup
src/main.js       NASA API request, clock, and search behavior
src/style.css     Page layout and visual styles
src/icons/        Quick-link icons
public/           Public static assets
vite.config.js    Vite configuration
```

## Configuration

The NASA API key is read from the `VITE_NASA_API_KEY` environment variable. Do not commit your `.env` file or expose private credentials in source control.
