import * as express from 'express'

const port = 3000
const app: express.Application = express();
app.get("/", function (req, res) {
    res.send('hello, world')
})
app.listen(port, function () {
    console.log(`App is listening on port: ${port}`)
})