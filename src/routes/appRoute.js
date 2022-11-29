
import express, { Router } from "express";

export const appRouter = Router();

appRouter.use(express.json()); 
appRouter.use(express.urlencoded({extended: true})); 

appRouter.get("/app", (req, res) => {
    res.write("returning approute")
    res.end()
})

appRouter.get("*", (req, res) => {
    res.writeHead(404, { 'content-type': 'application/json'});
    res.write("Not found");
    res.end();
})
