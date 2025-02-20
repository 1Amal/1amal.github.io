# Web Development Portfolio

Welcome to my web development portfolio! This repository showcases my skills and projects in web development. The site is hosted on GitHub Pages and built using vanilla JavaScript, HTML, and CSS. It is developed and maintained in an Ubuntu Linux environment, with tooling support provided by Webpack, NPM, Prettier, and ESLint.

## Live Version

[Click here for Production Site](https://www.amalk.au)

## 🚀 Features

- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Interactive Elements**: Demonstrates the use of vanilla JavaScript for dynamic content.
- **Clean Code**: Maintained code quality with Prettier and ESLint.
- **Webpack Integration**: Bundles JavaScript, CSS, and other assets efficiently.
- **GitHub Pages Hosting**: Deployed for easy access and sharing.

## 🛠 Technologies Used

- **HTML**: Structure and content of the site.
- **CSS**: Styling and layout of the site.
- **JavaScript**: Interactive features and dynamic content.
- **Webpack**: Module bundling and asset management.
- **NPM**: Package management.
- **Prettier**: Code formatting.
- **ESLint**: Code linting.
- **Ubuntu Linux**: Development environment.
- **GitHub Pages**: Hosting and deployment.

## 📦 Installation

To get started with this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/1Amal/1amal.github.io
   ```

## Initial Setup

`npm install`

## Important NPM commands

- To view all the dependencies `npm ls` or `npm ls --all` for all the dependencies
- View Webpack version: `npx webpack --version`
- Run Webpack development server: `npx webpack serve`
- Manual build: `npm run build`
- Automatic build: `npx webpack --watch`
- Update NPM packages and fix security issues: `npm audit fix` or `npm audit fix --force`

## Automatically deploy to Github Pages

Step 1
Remove the 'dist' directory from the project’s .gitignore file.

Step 2
Make sure git knows about your subtree (the subfolder with your site).

`git add dist && git commit -m "Initial dist subtree commit"`

Step 3
Use subtree push to send it to the gh-pages branch on GitHub.

`git subtree push --prefix dist origin gh-pages`
Boom. If your folder isn’t called dist, then you’ll need to change that in each of the commands above.

By adding this to the packages.json (Already configured for this repo)
You can simply push the commit to both the main branch and the gh-pages branch (Git Hub pages will be served from gh-pages branch)
`"scripts": {"gh-pages": "git subtree push --prefix dist origin gh-pages && git push"}`

To automatically push to Main and gh-pages branch you can simply run (package.json needs to have script setup as `"gh-pages": "git subtree push --prefix dist origin gh-pages && git push"`): `npm run gh-pages`

## Project Structure

This template includes the following folders and files:

src: Contains the source code for your web application.
components: Reusable UI components.
mainStyleSheet.css: Stylesheet for the application, it is served from the mainJavaScript.js.
assets: Static assets like images, fonts, etc.
mainJavaScript.js: The main entry point for your JavaScript application.
index.html: The main HTML template for your application.
Additional folders can be added based on your project needs (e.g., utils, api).
package.json: Manages project dependencies and scripts.
webpack.config.js: Webpack configuration file for bundling JavaScript modules.
.eslintrc.js: ESLint configuration file for linting rules.
.prettierrc.js: Prettier configuration file for formatting rules.
Note: The public folder is not strictly required but can be helpful during development with a development server.
