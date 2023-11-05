# my_react_template
# my_react_template
npm init
npm install typescript --save-dev
change index.js to index.tsx (file and configuration on package.json)

Add react types for typescript:
npm install @types/react @types/react-dom --save-dev

https://babeljs.io/setup: webpack and Jest (options to check on this page)

webpack:
npm install webpack --save-dev
npm install --save-dev babel-loader @babel/core @babel/preset-env

webpack.config.js:

module.exports = {
module: { 
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
  ]
  }
}


babel.config.json:
{
  "presets": ["@babel/preset-env"]
}

https://www.npmjs.com/package/react To install react and react-dom (for web)

npm install react react-dom

https://babeljs.io/docs/ (look at react preset)

npm install --save-dev @babel/preset-react

add the preset to look like this on babel config:
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

Typescript babel preset:
npm install --save-dev @babel/preset-typescript:

{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "runtime": "automatic"
      }
    ]
  ]
}

Was added a plugin to allow create React elements without the react import in each file.

set webpack mode as development, the entry and output:

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
}


install css-loader and style-loader:

https://webpack.js.org/guides/asset-management/#loading-css
npm install --save-dev style-loader css-loader

add the style loaders on webpack.config.js:

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
}

install HtmlWebpackPlugin (to not keep the bundle.js if we changed the entry point name on template)

npm install --save-dev html-webpack-plugin

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My React Template"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
}


Add webpack on build script:

{
  "name": "myreacttemplate",
  "version": "1.0.0",
  "description": "Only a React template, without create-react-app to start",
  "main": "index.ts",
  "scripts": {
    "test": "test",
    "build": "webpack"
  },
  "repository": {
    "type": "git",
    "url": "myReactTemplate"
  },
  "keywords": [
    "React",
    "Template"
  ],
  "author": "Matheus Penido",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.23.2",
    "@babel/preset-env": "^7.23.2",
    "@babel/preset-react": "^7.22.15",
    "@babel/preset-typescript": "^7.23.2",
    "babel-loader": "^9.1.3",
    "css-loader": "^6.8.1",
    "html-webpack-plugin": "^5.5.3",
    "style-loader": "^3.3.3",
    "typescript": "^5.2.2",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}


Install eslint:
npm install --save-dev eslint eslint-plugin-react

installed:
eslint-config-standard-with-typescript
eslint-plugin-import
eslint-plugin-n
eslint-plugin-promise
eslint-plugin-react
@typescript-eslint/eslint-plugin

configured eslint using npxeslint --init.
The generated file was a little bit changed to add or remove some rules:


module.exports = {
  env: {
    browser: true,
    es2024: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    curly: 'off',
    'eol-last': 'off',
    '@typescript-eslint/space-before-function-paren': 'off'
  }
};


created a tsconfig file:
{
  "compilerOptions": {
    "outDir": "dist",
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "allowJs": true,
    "strict": true,
    "esModuleInterop": true,
    "declaration": true,
    "emitDeclarationOnly": true,
    "isolatedModules": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src", ".eslintrc.cjs", "webpack.config.js"
  ]
}

The "react-jsx" is also to avoid the requeriment of add a import for react on each file.
"src", ".eslintrc.cjs", "webpack.config.js" is to eliminate an error on config files.


Reonfigured the webpack.config.js to work with ES module:
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "My React Template" })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}


Create a html5 template on /src/index.html:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
  <section id="root"></section>
</body>
</html>

and a index.tsx:
import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(<h1>With Auto-Reload</h1>);

add this to webpack.config.js:
plugins: [
    new HtmlWebpackPlugin({
      title: "My React Template",
      template: "./src/index.html"
    })
  ],
  


