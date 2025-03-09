# IoT Multi-Module Dashboard

A modern, responsive web dashboard for monitoring and controlling IoT devices across multiple modules.

## Technical Details

This dashboard is built with:

- **HTML5** for structure
- **CSS3** with modern features like CSS Grid, Flexbox, and CSS Variables
- **JavaScript** (ES6+) for interactivity and data handling
- **Chart.js** for data visualization
- **ESLint** for code quality and consistency
- **Jest** for unit testing

No backend is required as the dashboard currently uses simulated data. In a production environment, you would connect this to your IoT backend system via APIs.

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Open `index.html` in your browser
4. Explore the dashboard

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

### Testing

The project uses Jest for unit testing:

```bash
# Run tests
npm test
```

Test files are located in the `tests` directory and follow the naming convention `*.test.js`.

### CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

- Automatically runs ESLint and Jest tests on pull requests
- Ensures code quality before merging
- Generates and uploads test coverage reports

The workflow configuration is located in `.github/workflows/ci-cd.yml`.

### Code Reviews

We follow a set of guidelines for code reviews to maintain code quality and consistency. Please refer to [CodeReviewGuidelines.md](CodeReviewGuidelines.md) for more information.

## Customization

The dashboard is designed to be easily customizable:

- **Colors**: Edit the CSS variables in the `:root` selector in `styles.css`
- **Modules**: Add or remove modules by modifying the HTML structure
- **Data**: Replace the simulated data in `script.js` with your actual data sources
- **Linting Rules**: Modify the ESLint configuration in `eslint.config.mjs`

## Commit Message Standards

For writing commit messages, use the following format:
<type>(<scope>): <subject>

- **`type`:** Type of changes (e.g., `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`).
- **`scope`:** Scope of changes (optional, e.g., module or file name).
- **`subject`:** A short and clear description of the changes.

**Examples:**
feat(web-dashboard): add login button to the homepage
fix(iot-sensors): resolve sensor data parsing error
docs(readme): update commit message guidelines

## Milestones

Key milestones for the project are as follows:

- **`v0.1.0`:** Initial development of IoT sensors and web dashboard modules.
- **`v0.2.0`:** Integration of the CI/CD pipeline.
- **`v1.0.0`:** Release of the first version of the platform.

To view the tags, use the following command:
```bash
git tag
Copy
```

#### **Git Tags:**
```bash
$ git tag
v0.1.0
v0.2.0
v1.0.0
```