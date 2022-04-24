import express from 'express';
import passport from 'passport';

export const spotifyAuthRouter = express.Router();

// Router-specific middleware
spotifyAuthRouter.use((req, res, next) => {
  next();
});

spotifyAuthRouter.get(
  '/spotify',
  passport.authenticate('spotify', {
    scope: [
      'ugc-image-upload',
      'playlist-read-collaborative',
      'user-read-email',
      'playlist-modify-public',
      'playlist-read-private',
      'playlist-modify-private',
    ],
  }),
);

spotifyAuthRouter.get(
  '/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  (_, res) => {
    res.redirect('/');
  },
);
