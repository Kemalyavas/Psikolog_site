# Copilot Instructions for Psikolog Merve Site

This project is a static website for a Psychologist, built with HTML and Tailwind CSS.

## 🏗 Project Architecture & Structure

- **Root Directory**: The `dist/` folder is the production-ready root. It contains all HTML pages, assets, and compiled CSS/JS.
- **Source vs. Distribution**:
  - **CSS**: Source is in `src/css/input.css`. It is compiled to `dist/css/style.css`. **Do not edit `dist/css/style.css` directly.**
  - **HTML**: Source files are located directly in `dist/` (e.g., `dist/index.html`, `dist/hakkimda.html`).
  - **JavaScript**: Currently located in `dist/js/main.js`.
  - **Assets**: Images are in `dist/images/`.

## 🛠 Critical Workflows

### 1. CSS Development (Tailwind)
- **Command**: Run `npm run dev` to start the Tailwind CLI in watch mode.
- **Process**: 
  1. Add Tailwind classes to HTML files in `dist/`.
  2. If custom CSS is needed, add it to `src/css/input.css`.
  3. The watcher will automatically regenerate `dist/css/style.css`.
- **Build**: Run `npm run build` to minify CSS for production.

### 2. Content & HTML Updates
- Edit HTML files directly in the `dist/` folder.
- Ensure all content is in **Turkish**.
- Follow the structure defined in `psikolog-website-despriction.txt` for content guidance.

## 🧩 Patterns & Conventions

- **Styling**: Use Tailwind CSS utility classes for all styling. Avoid inline styles.
- **Responsive Design**: Ensure all pages are mobile-responsive using Tailwind's responsive prefixes (e.g., `md:flex`, `lg:w-1/2`).
- **Navigation**: Links should be relative to the `dist/` root (e.g., `href="hakkimda.html"`).

## 📂 Key Files
- `package.json`: Contains build scripts (`dev`, `build`).
- `tailwind.config.js`: Tailwind configuration.
- `src/css/input.css`: Main CSS entry point.
- `dist/index.html`: Homepage.
