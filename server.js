const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();

//DB connection
require("./db/connection");

//router
const router = require("./routes/route");

app.use(cors());
app.use(express.json());
app.use(router)

//listen(server)
app.listen(PORT, () => {
    console.log("Your Server is running on PORT no ==> " + PORT)
})