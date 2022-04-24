'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const app_1 = require('./app');
const server = (0, app_1.build)({ logger: process.env.LOGGER || true });
server.listen(process.env.PORT || 8080, process.env.HOST || '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
