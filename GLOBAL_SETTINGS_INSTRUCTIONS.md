# Making Prettier and VSCode Settings Global

To make your formatting settings work globally across all projects (not just the current one), follow these instructions:

## 1. Global VSCode Settings

VSCode stores global settings in a `settings.json` file in your user directory:

- **Windows**: `%APPDATA%\Code\User\settings.json`
- **macOS**: `~/Library/Application Support/Code/User/settings.json`
- **Linux**: `~/.config/Code/User/settings.json`

Open or create this file and add the following settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.requireConfig": false
}
```

Note: We've changed `"prettier.requireConfig": true` to `false` so that Prettier will work even in projects without a configuration file.

## 2. Global Prettier Configuration

Prettier can use a global configuration file located in your home directory:

1. Create a file named `.prettierrc` in your home directory:
   - **Windows**: `C:\Users\<YourUsername>\.prettierrc`
   - **macOS/Linux**: `~/.prettierrc`

2. Add the following content to the file:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

## 3. Install Required VSCode Extensions Globally

Make sure you have the following VSCode extensions installed:

1. **Prettier - Code formatter** (esbenp.prettier-vscode)
2. **ESLint** (dbaeumer.vscode-eslint)

## 4. Verify Your Global Settings

To verify that your global settings are working:

1. Open a new project that doesn't have its own Prettier or VSCode settings
2. Create a new JavaScript file with some unformatted code
3. Save the file - it should automatically format according to your global Prettier rules

## Note

If a project has its own `.prettierrc` file or `.vscode/settings.json`, those local settings will override your global settings for that specific project.