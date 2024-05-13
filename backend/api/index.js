const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.send("express on vercel")
})

app.listen( 10000, () => console.log("App listening on port 10000"));
