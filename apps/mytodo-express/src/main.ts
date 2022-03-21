import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';

import cors from 'cors';
import todoRoutes from './app/routes';

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

const app = express();
app.use(bodyParser.json());
//app.use(cors());
app.use(todoRoutes);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to mytodo-express!' });
});

const PORT: string | number = process.env.PORT || 4000;

const uri = `mongodb://127.0.0.1:27017`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });

// const port = process.env.port || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });
// server.on('error', console.error);
