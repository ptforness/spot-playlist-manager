import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { env } from 'process';
import { initializeSerialization } from './passport/serialization';
import { useSpotifyStrategy } from './passport/spotifyPassport';
import { accountRouter } from './routes/account';
import { spotifyAuthRouter } from './routes/spotifyAuth';

initializeSerialization();
useSpotifyStrategy('/auth/spotify/callback');
const app = express();

app.use(session({ secret: [...(env.SESSION_SECRETS?.split(',') || '')], resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

// Routers
app.use('/auth', spotifyAuthRouter);
app.use('/account', accountRouter);
app.get('/', (req, res) => {
    res.send({ user: req.user });
});

export { app };
