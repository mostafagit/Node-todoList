const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/todo_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Connected To Database"))
    .catch((err) => console.log(err));

//*Connection,Schema&&Model,Instance,Mongoose Methods
