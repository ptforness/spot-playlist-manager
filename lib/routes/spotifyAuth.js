'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.spotifyAuthRouter = void 0;
const fastify_oauth2_1 = __importDefault(require('fastify-oauth2'));
const spotifyAuthRouter = (fastify, _, done) => {
  fastify.register(fastify_oauth2_1.default, {
    name: 'spotifyOAuth2',
    scope: [
      'ugc-image-upload',
      'playlist-read-collaborative',
      'user-read-email',
      'playlist-modify-public',
      'playlist-read-private',
      'playlist-modify-private',
    ],
    credentials: {
      client: {
        id: process.env.CLIENT_ID,
        secret: process.env.CLIENT_SECRET,
      },
      auth: fastify_oauth2_1.default.SPOTIFY_CONFIGURATION,
    },
    startRedirectPath: 'login/spotify',
    callbackUri: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8080}/login/spotify/callback`,
  });
  fastify.get('/login/spotify/callback', (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const token = yield this.spotifyOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);
      console.log(token.access_token);
      res.send({ access_token: token.access_token });
    }),
  );
  done();
};
exports.spotifyAuthRouter = spotifyAuthRouter;
