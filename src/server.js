import express from "express";
import { appRouter } from "./routes/appRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", appRouter).listen(PORT, () => {
    console.log(`connect to ${PORT}...`)
})

