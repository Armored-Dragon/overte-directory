import express from 'express';
import 'dotenv/config'

const app = express();
const port = 5051;

app.use(express.json());

import v1ApiRoute from './api/v1/routes';
import v2ApiRoute from './api/v2/routes';

app.use('/api/v1', v1ApiRoute);
app.use('/api/v2', v2ApiRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
