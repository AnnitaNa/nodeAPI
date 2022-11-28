import http from "node:http";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.end("hello world")
})

server.listen(PORT, () => {
    console.log(`connect to ${PORT}...`)
})

export {server}