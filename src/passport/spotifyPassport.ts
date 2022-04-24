import passport, { Profile } from 'passport';
import { VerifyCallback } from 'passport-spotify';
import { env } from 'process';
const SpotifyStrategy = require('passport-spotify').Strategy;

export const useSpotifyStrategy = (callbackPath: string): void => {
  passport.use(
    new SpotifyStrategy(
      {
        clientID: env.CLIENT_ID,
        clientSecret: env.CLIENT_SECRET,
        callbackURL: (env.HOST || 'http://localhost') + ':' + (env.port || 8080) + callbackPath,
      },
      (accessToken: string, refreshToken: string, expires_in: number, profile: Profile, done: VerifyCallback) => {
        //TODO lookup spotify account in db and return whatever we want from that
        return done(null, profile);
      },
    ),
  );
};
