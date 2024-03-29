import express from "express";
import cors from "cors";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const app = express();
app.use(cors());
app.use(express.json());
const api_key = "gzjne9xnnc5j";
const api_secret = "kp83fnbcr5e89kysqjevn8xhkv2jdep2aw5wf4jyc3gpnzdnzh2c53dgxdsnv885";

const serverClient = StreamChat.getInstance(api_key, api_secret);


app.post("/signup", async (req, res) => {
      try {
     const { firstName, lastName, username, password } = req.body
     const userId = uuidv4();
     const hashedPassword = await bcrypt.hash(password, 10);
     const token = serverClient.createToken(userId);
     res.json({ token, userId, firstName, lastName, username, hashedPassword });
      } catch (error) {
        res.json(error);
      }
    });

app.post("/login")

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
