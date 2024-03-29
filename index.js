const connectDb = require("./db");
const express = require("express");
const app = express();
const routes = require("./routes/routes");
const cors = require("cors");
const path = require("path");



connectDb();
//middleware
app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, "../frontend/build")))


//routes
app.use("/api/v1", routes)
app.use("*", function (req, resp) {
    resp.sendFile(path.join(__dirname, "../frontend/build/index.html"))
})



const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('server is listening on' + port)
})