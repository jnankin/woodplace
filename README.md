# Wood Place Property Management Website

A modern, responsive Jekyll website with Tailwind CSS for Wood Place Property Management.

## Features

- Clean, professional design inspired by modern property management sites
- Fully responsive layout for mobile, tablet, and desktop devices
- Tailwind CSS for styling
- Single-page layout with smooth navigation
- Sections: Hero, About, Services, Properties, Contact

## Prerequisites

- Ruby (version 2.7 or higher)
- Node.js (version 14 or higher)
- Bundler gem

## Installation

1. Install Ruby dependencies:
```bash
bundle install
```

2. Install Node.js dependencies:
```bash
npm install
```

## Development

To build the Tailwind CSS and run Jekyll simultaneously:

```bash
npm run dev
```

This will:
- Build and watch Tailwind CSS for changes
- Start Jekyll server with live reload
- Open the site at `http://localhost:4000`

### Alternative: Run commands separately

In one terminal, build Tailwind CSS:
```bash
npm run build:css
```

In another terminal, run Jekyll:
```bash
npm run build:jekyll
```

## Building for Production

1. Build Tailwind CSS (production mode):
```bash
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/styles.css --minify
```

2. Build Jekyll site:
```bash
bundle exec jekyll build
```

The production-ready site will be in the `_site/` directory.

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
- `brand-green`: Primary green color
- `brand-dark`: Dark background color
- `brand-light`: Light background color

### Content
Edit `index.html` to update:
- Company information
- Services offered
- Property statistics
- Contact details

### Styling
Additional custom styles can be added to `assets/css/main.css`.

## Project Structure

```
woodplace/
├── _layouts/
│   └── default.html       # Main layout template
├── assets/
│   └── css/
│       ├── main.css       # Tailwind directives
│       └── styles.css     # Generated CSS (auto-generated)
├── _config.yml            # Jekyll configuration
├── index.html             # Homepage
├── Gemfile                # Ruby dependencies
├── package.json           # Node.js dependencies
└── tailwind.config.js     # Tailwind configuration
```

## License

Copyright © 2026 Wood Place Property Management
