

<p align="center">
  <a href="https://react.dev/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png" width="200" alt="React Logo" /></a>
</p>
<p align="center">
  Aplicação em React Native/TypeScript - Todo em react native 🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/alvarobraz/todorocket"/>

  <a href="https://nestjs.com/">
    <img alt="Made by NodeJS" src="https://img.shields.io/badge/made%20by-reactnative-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/todorocket/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/todorocket">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/todorocket">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre ##

Projeto básico em React Native de uma lista de tarefas.

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [React Natvive](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)


## Estrutura ##
```
.
├── app.json
├── App.tsx
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── babel.config.js
├── LICENSE
├── package.json
├── README.md
├── src
│   ├── assets
│   │   ├── checked.png
│   │   ├── circle_add.png
│   │   ├── logo_todorocket.png
│   │   ├── sheet.png
│   │   └── trash.png
│   ├── components
│   │   ├── Button
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Counter
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── HeaderHome
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Input
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   └── Tasks
│   │       ├── index.tsx
│   │       └── style.ts
│   └── screens
│       └── Home
│           ├── index.tsx
│           └── style.ts
├── tsconfig.json
└── yarn.lock


```

## :white_check_mark: Requerimentos ##

- [React Native](https://reactnative.dev/)
- [npx](https://www.npmjs.com/package/npx)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/alvarobraz/todorocket

# Access
$ cd todorocket

# Nide Version
$ nvm use 18.16.1

# Install dependencies
$ npx expo install

# Run the project
$ npx expo start

# The server will initialize in the <http://localhost:3333>
```

React Native is [MIT licensed](LICENSE).
