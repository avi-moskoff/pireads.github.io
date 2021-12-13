# Source code for [my personal website](https://avi.me).

Actual site is served via Github Pages from the `docs` directory.

# To develop:

- `nvm use 16`
  - We're using 16 because 17 has an issue where webpack is using md5 hashes and 17 is not a fan of that
  - TODO: [When Webpack 6 is adopted by Gatsby, we can update everything.](https://github.com/webpack/webpack/issues/14532)
- `gatsby develop`

# To deploy (Run before committing):

- `./deploy.sh`
