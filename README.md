# Search GitHub

[![CircleCI](https://circleci.com/gh/danvitoriano/search-github.svg?style=svg)](https://circleci.com/gh/danvitoriano/search-github)

**Type for an username and get GitHub user details.**

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Install

```
git clone git@github.com:danvitoriano/search-github.git
cd search-github
yarn install
```

## Run

```
yarn start
```

Starts the development server at [http://localhost:3000](http://localhost:3000).

```
yarn build
```

## Test

```
npx cypress open
```

Starts [http://cypress.io](http://cypress.io) JavaScript End to End Testing Framework. You can change properties, **environment** and mock stubs at `Globals.js` file.

## Continuos Integration

Automated build continuous process with [CircleCI](http://circleci.com)

## Deploy

### now.sh

Install [now.sh](http://now.sh) to build and deploy on public address. Then just run:

```
now
```

### Heroku

Use [Heroku Buildpack](https://github.com/mars/create-react-app-buildpack).

✏️ *Replace `$APP_NAME` with a name for your unique app.*

```bash
git init
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
```

## GitHub Mock API

[GitHub API](https://developer.github.com/v3/) has 5000 request limit per hour. If you got stucked into this, use this [fork](https://github.com/danvitoriano/mock-github-api) of [mock-github-api](https://github.com/mzabriskie/mock-github-api) and run it from localhost. You can change properties at `Globals.js` file.

## [Wiki](https://github.com/danvitoriano/search-github/wiki)

Provides additional documentation and share long-form content about this project.

## Issues

View all [issues](https://github.com/danvitoriano/search-github/issues) or open a [new issue](https://github.com/danvitoriano/search-github/issues/new).

## Pull Requests

Create a new [pull request](https://github.com/danvitoriano/search-github/pulls) to collaborate, discuss and review potential changes.

## Contact

<vitoriano08@gmail.com>
