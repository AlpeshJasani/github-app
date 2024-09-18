# Github App | React, MongoDB, Express.js, Passport.js

## Live: https://github-app-0s0d.onrender.com/

Some Features:

- ⚙️ Tech stack: MERN + TailwindCSS + Github API
- 🔑 Authentication && Authorization with Passport.js (Github Auth)
- 👾 Fetch Github User Profiles and Repos
- 🚀 Filter Repos on the Client
- 🎭 Learn behind the scenes for authentication
- 🐛 Error handling (both on the server and on the client)
- 🎃 Deployed!!

### Setup .env file

```js
PORT=5000
MONGO_URI=
GITHUB_API_KEY=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
CLIENT_BASE_URL=
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```

### Notes

- https://icons8.com/ for icons
- https://flowbite.com/ for components
- https://tailwindcss.com/ for styling
- https://reactjs.org/ for react
- https://expressjs.com/ for express
- https://passportjs.org/ for passport

- https://github.com/login/oauth/authorize for github auth
- https://github.com/login/oauth/access_token for github token
- https://api.github.com/users for github user data
- https://api.github.com/repos for github repo data

- https://api.github.com/ -> Unauthorize - 60 requests per hr.
- Authorize requests (5000 req per hr)
  - https://github.com/settings/tokens -> Personal access tokens (Tokens(classic)) - Create for repos - Get a key
- https://github.com/settings/developers -> oAuth Apps

- https://www.passportjs.org/packages/passport-github2/ ->
- https://github.com/cfsghost/passport-github/blob/master/examples/login/app.js <- Example
"# github-app" 
