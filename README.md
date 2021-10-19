# Find a person's best tweets

## Developing

Copy the environment variable template:

```sh
cp .env.development.template .env.development
# .env.development is in .gitignore to prevent accidental publication
```

Add the appropriate values to `.env.development`.

> You'll need to create a twitter app from [developer portal](https://developer.twitter.com/en/apply-for-access) for your bearer token.

#### Useful commands

- `yarn run dev` starts the dev server and will automatically rebuild on any change.
