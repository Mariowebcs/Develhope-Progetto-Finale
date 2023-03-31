import { MongoClient } from 'mongodb';

const connectToServer = async (uri) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Data_Eveny').insertOne({
      message: 'Inserted'
    });
    await res.close();
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }

}

const addUserToCollection = async (uri, payload) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Users').insertOne(payload);
    await res.close();
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }
}

const getUsers = async (uri) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Users').find().toArray();
    await res.close();
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }
}
export { connectToServer, addUserToCollection, getUsers };
