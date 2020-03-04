# Netlify Lambda Typescript Boilerplate

A minimal setup to Debug TypeScript on Node in VSCode.

## Prerequisites:

-   VSCode (tested with v1.25.1)
-   NodeJS (tested with v0.10.9)
-   NPM (tested with v6.1.0)

## Features

-   debugging
-   build
-   prettier formatting
-   standard versioning

## Usage

To get started first clone this repo:

```bash
git clone https://github.com/sajjad-shirazy/netlify-lambda-typescript-boilerplate
```

Install node package dependencies (typescript and ts-node):

```bash
npm install
```

Start up VSCode if you haven't already (tested with VSCode v1.25.1):

```bash
code .
```

### Build

```bash
npm run lambda:build
```

### Start

```bash
npm run lambda:serve
```

### Debug

```bash
npm run lambda:serve
```

and then you should start `Debug Lambda Server` from Run& Debug panel. sourcemaps doesn't work so you have to set breakpoints on `./dist` files.

### Fromatting all source codes

```bash
npm run format
```

### Versioning

Updates version within `package.json` & updates change log on the root & creates a new tag in git and pushes all changes in the origin reposiotory.

Realeasing a Patch

```bash
npm run release:patch
```

Realeasing a Minor

```bash
npm run release:minor
```

Realeasing a Major

```bash
npm run release:major
```
