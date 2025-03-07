import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello CORE!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
