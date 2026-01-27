import mongoose from "mongoose";
const connectionUrl = "mongodb://localhost:27017/portfolio";

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //ssl: true,
});
mongoose.connection.on("connected", () => {
  console.log("✅ database connected");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ Mongoose connection error:", err);
});

export const {Schema, model} = mongoose;
