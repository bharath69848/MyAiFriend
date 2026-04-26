import express from "express"

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
  res.send("HOME PAGE")
})

app.listen(3000,() => {
  console.log("Running on 3k")
});