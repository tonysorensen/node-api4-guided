require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5000;
const pw = process.env.SECRET_PASSWORD;
console.log("hi", port, pw);
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
