const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error));


app.use("/posts", require("./routes/posts"));

app.get('/', (req, res) => {
    res.send("Server is up");
});

app.listen(process.env.PORT, () => console.log('Connected to Application'));