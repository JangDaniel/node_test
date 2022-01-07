const express = require("express");
const expressHandlebars = require("express-handlebars");
const handlers = require("./lib/handlers");

const app = express();

/* eslint-disable no-undef */
const port = process.env.PORT || 3000;
/* eslint-enable no-undef */

app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

/* eslint-disable no-undef */
app.use(express.static(__dirname + "/public"));
/* eslint-enable no-undef */

app.get("/", handlers.home);

app.get("/about", handlers.about);

app.use(handlers.notFound);

app.use(handlers.serverError);

app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}; ` +
      "press Ctrl-C to terminate."
  )
);
