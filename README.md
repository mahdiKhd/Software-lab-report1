# IoT Multi-Module Dashboard

A modern, responsive web dashboard for monitoring and controlling IoT devices across multiple modules.

## Technical Details

This dashboard is built with:

- **HTML5** for structure
- **CSS3** with modern features like CSS Grid, Flexbox, and CSS Variables
- **JavaScript** (ES6+) for interactivity and data handling
- **Chart.js** for data visualization
- **ESLint** for code quality and consistency

No backend is required as the dashboard currently uses simulated data. In a production environment, you would connect this to your IoT backend system via APIs.

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser
3. Explore the dashboard

## Development

### Prerequisites

- Node.js and npm

### Setup

```bash
# Install dependencies
npm install
```

### Linting

The project uses ESLint to maintain code quality and consistency:

```bash
# Run ESLint
npm run lint

# Fix automatically fixable issues
npm run lint:fix
```

## Customization

The dashboard is designed to be easily customizable:

- **Colors**: Edit the CSS variables in the `:root` selector in `styles.css`
- **Modules**: Add or remove modules by modifying the HTML structure
- **Data**: Replace the simulated data in `script.js` with your actual data sources
- **Linting Rules**: Modify the ESLint configuration in `eslint.config.mjs`
