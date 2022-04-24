import express from 'express';
import { ensureAuthenticated } from '../passport/ensureAuthenticated';

export const accountRouter = express.Router();

accountRouter.get('/', ensureAuthenticated, (req, res) => {
  res.send({ user: req.user });
});
