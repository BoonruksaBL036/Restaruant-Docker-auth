import express from "express"
const app = express();
import dotenv from "dotenv";
dotenv.config()
const PORT = process.env.PORT || 5000;
import restaurantRouter from "./routers/restaurant.router.js"
import authRouter from "./routers/auth.router.js";
import db from "./models/index.js"
db.sequelize.sync({ force: false }).then(() => {
  console.log("create table user_roles");
});

import cors from "cors"
app.use(cors({
  origin: ["http://localhost:5173","127.0.0.1:5173"],
  methods: ["GET", "POST", "PUT","DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  }));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("Restaurant Restful API");
});

//use router
app.use("/api/v1/restaurants",restaurantRouter);

//use authentication router
app.use("/api/v1", authRouter);

app.listen(PORT,()=>{
    console.log("Listening to http://localhost:" + PORT);
})
