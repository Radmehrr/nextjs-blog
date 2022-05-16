import { ConnectDatabase, insertMessage } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await ConnectDatabase();
    } catch (e) {
      res.status(500).json({ message: "Can not connect to database" });
      return;
    }

    try {
      const result = await insertMessage(client, newMessage);
      newMessage._id = result.insertedId;
    } catch (e) {
      client.close();
      res.status(500).json({ message: "Storing message Failed." });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;
