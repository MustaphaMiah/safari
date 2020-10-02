//When runnning flat build, add index.html at root of project and run node index.js in cli to serve it on localhost:4000
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const dest = `${__dirname}`;

app.use(express.static(dest));
app.get("/*", (req, res) => res.sendFile(`${dest}/index.html`));
app.listen(port, () => console.log(`Express has started on port: ${port}`));