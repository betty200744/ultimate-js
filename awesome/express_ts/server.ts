import * as express from 'express'

const port = 3000
const app: express.Application = express();

let myLogger1 = function (req, res, next) {
    console.log("myLogger1 , before")
    next()
    console.log("myLogger1, after")
}
let myLogger2 = function (req, res, next) {
    console.log("myLogger2 , before")
    next()
    console.log("myLogger2, after")
}
let myLogger3 = function (req, res, next) {
    console.log("myLogger3 , before")
    next()
    console.log("myLogger3, after")
}
app.use(myLogger1, myLogger2, myLogger3)
app.get("/", function (req, res) {
    res.send('hello, world')
})
app.listen(port, function () {
    console.log(`App is listening on port: ${port}`)
})