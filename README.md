# Screenshot Cleaner

## What the hell is this?
Since I work with a team. My Desktop gets cluttered with Screenshots.

## how does it work?
It runs on startup, checks wether a screenshot is older than 1 day. It then moves the picture to  `/Documents/ScreenshotArchive` there it checks if the pictures are older than 1 month and deletes them

## how to install
`$ npm install `
`$ node index.js` -> checks if it runs without crashing <br />
`$ sudo npm i -g pm2  ` -> pm2 manages startup <br />
`$ pm2 start index.js`<br />
`$ pm2 startup`
