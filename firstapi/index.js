const express = require("express");
const app = express();

//Seems this needs to be in this order
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.listen(3000, () => {
    console.log('Connected to Server');
});

app.get('/', (req, res) => {
    res.send("Server is up");
});

const routes = require("./routes/routes.js");

app.use("/routes", routes);

