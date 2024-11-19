<h1 align="center">⚡️ LOGINLOCK KIT ⚡️</h1>

<p align="center">
  <strong>A collection of reusable React components for building modern user interfaces.</strong>
</p>

<p align="center">
  <a href="https://github.com/Chucky22Mendoza/LogInLock-kit" target="_blank">
    <img src="https://img.shields.io/github/stars/Chucky22Mendoza/LogInLock-kit?style=social" alt="GitHub stars" />
  </a>
  <a href="https://www.npmjs.com/package/loginlock-kit" target="_blank">
    <img src="https://img.shields.io/npm/v/loginlock-kit" alt="npm version" />
  </a>
  <a href="https://github.com/Chucky22Mendoza/LogInLock-kit/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/Chucky22Mendoza/LogInLock-kit" alt="license" />
  </a>
</p>

<br />

## Description

**`LogInLock Kit`** is a collection of lightweight, reusable UI components for React applications. It is designed to be simple, modern, and highly customizable. It currently includes:

- **Badge**: A customizable badge component.
- **Divider**: A simple divider to separate sections.
- **Spinner**: A loading spinner with support for labels.

---

## Installation

You can install `loginlock-kit` from **npm**:

```bash
npm install loginlock-kit
```

Or if you're using **yarn**:

```bash
yarn add loginlock-kit
```

---

## Components

### 🔖 **Badge**

A component for displaying customizable badges with various style options.

#### Usage:

```tsx
import { Badge } from 'loginlock-kit';

function App() {
  return (
    <div>
      <Badge variant="primary" size="md" label="New">
        10
      </Badge>
      <Badge variant="secondary" label="Beta" />
    </div>
  );
}
```

#### Props:

- `variant` (optional): Defines the badge style. Possible values: `"primary"`, `"secondary"`, `"tertiary"`.
- `size` (optional): The size of the badge. Possible values: `"sm"`, `"md"`, `"lg"`.
- `label` (optional): The label to display next to the badge.
- `children` (optional): The content of the badge, e.g., a number or text.

---

### ➗ **Divider**

A flexible divider component to separate content in your interface.

#### Usage:

```tsx
import { Divider } from 'loginlock-kit';

function App() {
  return (
    <div>
      <p>Content above the divider</p>
      <Divider size="md" direction="horizontal" />
      <p>Content below the divider</p>
    </div>
  );
}
```

#### Props:

- `size` (optional): The size of the divider. Possible values: `"sm"`, `"md"`, `"lg"`.
- `direction` (optional): The direction of the divider. Possible values: `"horizontal"`, `"vertical"`.
- `className` (optional): Additional class for custom styling.
- `style` (optional): Inline style for further customization.

---

### ⏳ **Spinner**

A loading spinner component with optional label support.

#### Usage:

```tsx
import { Spinner } from 'loginlock-kit';

function App() {
  return (
    <div>
      <Spinner size="lg" label="Loading..." />
    </div>
  );
}
```

#### Props:

- `size` (optional): The size of the spinner. Possible values: `"sm"`, `"md"`, `"lg"`.
- `label` (optional): The text displayed next to the spinner.
- `className` (optional): Additional class for custom styling.
- `style` (optional): Inline style for further customization.

---

Here’s your updated README with the new **Button** component documentation translated into English:

---

### 🔘 **Button**

A flexible component that acts as a button or a link, depending on the provided props.

#### Usage:

```tsx
import { Button } from 'loginlock-kit';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click Me
      </Button>
      <Button variant="outlined" size="lg" startIcon={<Icon />} endIcon={<Icon />}>
        With Icons
      </Button>
      <Button href="https://example.com" variant="text" size="sm">
        Go to Example
      </Button>
    </div>
  );
}
```

#### Props:

- **`size`** (optional): Defines the button size. Possible values: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
- **`variant`** (optional): Defines the button style. Possible values: `"primary"`, `"outlined"`, `"text"`. Defaults to `"primary"`.
- **`startIcon`** (optional): An icon rendered at the beginning of the button content.
- **`endIcon`** (optional): An icon rendered at the end of the button content.
- **`children`** (optional): The button or link content, such as text or elements.
- **`href`** (optional): If provided, the component behaves as a link (`<a>`).
- **`className`** (optional): Additional CSS class for custom styling.
- **`style`** (optional): Inline styles for further customization.

---

## Scripts

- `npm run dev`: Starts the development server using **Vite**.
- `npm run build`: Builds the package for production with **TypeScript** and **Vite**.
- `npm run lint`: Lints the code using **ESLint**.
- `npm run preview`: Previews the built version of the library.
- `npm run sb`: Starts Storybook for interactive component exploration and testing.
- `npm run build-storybook`: Builds the static version of Storybook.
- `npm run test`: Runs tests using **Vitest**.

---

## Development

If you'd like to contribute or develop locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Chucky22Mendoza/LogInLock-kit.git
   cd LogInLock-kit
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development environment:

   ```bash
   npm run dev
   ```

---

## License

Distributed under the [MIT License](https://github.com/Chucky22Mendoza/LogInLock-kit/blob/main/LICENSE).

---

## Contribute

If you have suggestions or improvements for this project, feel free to open an *issue* or submit a *pull request* on the GitHub repository!

---

## Contact

- **Author**: [Jesús Mendoza Verduzco](https://jesus-mendoza.pages.dev/)
- **Email**: [loginlock22@gmail.com](mailto:loginlock22@gmail.com)
- **GitHub**: [@Chucky22Mendoza](https://github.com/Chucky22Mendoza)
