const app = require("./app")

require("dotenv").config()

const PORT = process.env.PORT

app.listen(port, () => {
    console.log(`Server running strong on ${port}`)
})