const server = require("http").createServer();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/users", (req, res) => {
  res.send([
    {
      nick: "depelu",
      avatar: "https://i.pravatar.cc/150?u=depelu",
      subMonths: 3,
      description: "Mode",
    },
    {
      nick: "sergio",
      avatar: "https://i.pravatar.cc/150?u=sergio",
      subMonths: 7,
      description: "Mode",
    },
    {
      nick: "pedro",
      avatar: "https://i.pravatar.cc/150?u=pedro",
      subMonths: 32,
    },
  ]);
});

// app.listen("We are running in: "+port);
app.listen(port, () => console.log(`Listening on ${port}`));
