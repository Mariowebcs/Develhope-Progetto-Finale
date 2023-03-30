import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { addUserToCollection, connectToServer, getUsers } from './conn.js';

config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
// get driver connection
app.get('/test', async (req, res) => {
  const users = await getUsers(process.env.MONGO_URI);
  res.send(JSON.stringify(users));
})

app.post('/api/v1/user', async (req, res) => {
  console.log('request send');
  try {
    const body = req.body;
    console.log(body);
    const result = await addUserToCollection(process.env.MONGO_URI, body);
    res.send(JSON.stringify(result));
  } catch (ex) {
    console.log(ex);
    res.status(500);
  }

})
app.listen(port, () => {
  // perform a database connection when server starts
  // connectToServer(process.env.MONGO_URI);
  console.log(`Server is running on port: ${port}`);
});
