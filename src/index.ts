import { env } from 'process';
import { app } from './app';

app.listen(env.PORT, () => {
  console.log(`App is listening on port ${env.PORT}.`);
});
