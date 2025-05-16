const exp = require("express")
const app = exp()

app.listen(3500,()=>{console.log("server listening on port 3500")})

const userApp = require("./APIs/userApi/userApi")
// app.use("/user-api",userApp)


