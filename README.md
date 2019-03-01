# Civic Tech Vancouver website

## Tech stack
### Frontend
- JavaScript (ES6+)
- Nuxt.js (Vue.js SSR framework)
- Vuetify.js (Vue.js UI framework)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Webpack](https://webpack.js.org/)
- [yarn](https://yarnpkg.com/)

### Backend
- [Firebase](https://firebase.google.com/)
  - Cloud Functions
  - Housing

## Design
- Material design base

## Communication Tools
- [#website on Slack](http://slack.civictechvancouver.ca/)
- [through issues on GitHub](https://github.com/CivicTechVancouver/civictechvancouver.ca/issues)

## Base Repository
This project is based on this repository: https://github.com/wataruoguchi/nuxtjs-firebase-example

## Fetching meetup events
```bash
cd src && yarn fetchMeetup
```

## Build & deploy process
```bash
cd src && yarn build && cd .. && yarn deploy
```
