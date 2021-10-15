import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("*", (req, res) => res.sendStatus(404));

app.listen(port, () => {
  console.log(`Server listening at *:${port}`);
});
