# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- [Netlify Functions](https://www.netlify.com/products/functions/)

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

### Available scripts

#### `dev`

Starts the Remix dev server.

The Remix dev server starts your app in development mode, rebuilding assets on file changes.

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

#### `start`

The Netlify CLI builds a production version of your Remix App Server and splits it into Netlify Functions that run locally. This includes any custom Netlify functions you've developed. The Netlify CLI runs all of this in its development mode.

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

Note: When running the Netlify CLI, file changes will rebuild assets, but you will not see the changes to the page you are on unless you do a browser refresh of the page. Due to how the Netlify CLI builds the Remix App Server, it does not support hot module reloading.

#### `build`

Builds your app for production. This command will set `process.env.NODE_ENV` to production and minify the output for deployment.

#### `typecheck`

Compiles the project.

#### `commit`

It helps writing commit message with [`git-cz` CLI](https://github.com/streamich/git-cz).

Thanks to [Commit Lint](https://commitlint.js.org/) it respects [Conventional Changelog Specifications](https://www.conventionalcommits.org/).

#### `lint`

It lints codebase with [ESLint](https://eslint.org/).

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```
