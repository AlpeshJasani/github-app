# SETUP server.js (express.static and res.sendFile for react app)

# SETUP "build" and "start" scripts in package.json

# Deploy on render.com with env variables

- Not put CLIENT_BASE_URL (cause we don't know https://github-app-0s0d.onrender.com/)

# Update Github OAuth App (homepage url and callback url)

- homepage url: https://github-app-0s0d.onrender.com/
- callback url: https://github-app-0s0d.onrender.com/api/auth/github/callback

# Add CLIENT_BASE_URL as env variable on render

- CLIENT_BASE_URL=https://github-app-0s0d.onrender.com/

# Update the callback url on github.auth.js to full url (deployed url)

- callbackURL: "https://github-app-0s0d.onrender.com/api/auth/github/callback", // backend callback
