'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.build = void 0;
const fastify_1 = __importDefault(require('fastify'));
const fastify_cookie_1 = __importDefault(require('fastify-cookie'));
const spotifyAuth_1 = require('./routes/spotifyAuth');
const build = (opts = {}) => {
  const app = (0, fastify_1.default)(opts);
  app.register(fastify_cookie_1.default);
  app.register(spotifyAuth_1.spotifyAuthRouter);
  return app;
};
exports.build = build;
