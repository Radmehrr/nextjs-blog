import { MongoClient } from "mongodb";

export async function ConnectDatabase() {
  const client = await MongoClient.connect(
    `${process.env.mongodb_url}/${process.env.mongodb_database}`
  );
  return client;
}

export async function insertMessage(client, data) {
  const db = client.db();
  const result = await db.collection("messages").insertOne(data);
  return result;
}
