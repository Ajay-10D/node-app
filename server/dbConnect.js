const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sanjay:RyPB8QrgPoB8Qlzo@cluster0.pksznvd.mongodb.net/blog?retryWrites=true&w=majority"
);

mongoose.connection.on("error", () => {
  console.log("db connection error");
});
