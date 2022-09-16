# cardanocli-react
My template of React and [cardanocli-js](https://github.com/shareslake/cardanocli-js) integration.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<img src="/screenshots/0_HomePage0.png"/>

### `npm run cc`
Runs the app concurrently with [`node server.js`](server.js).\
\
[`package.json`](package.json):
```json
"scripts": {
  ...
    "cc": "concurrently \"node server\" \"npm start\""
  ...
}
```
[`npm i concurrently`](https://www.npmjs.com/package/concurrently)
