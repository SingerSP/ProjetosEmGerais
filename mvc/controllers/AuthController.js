const AuthModel = require("../models/AuthModel")


class AuthController
{
  constructor(app)
  {
    app.get("/auth", (req, res) =>{
        res.render("Auth/login", {})
    })

    app.post("/auth", (req, res) => {

      const email = req.body.email
      const password = req.body.password
      const auth = new AuthModel(email, password)

      if(auth.login()){
        res.render("Home/index")
      }
      else{
        res.json({msg: "Não permitido"})
      }
    })
  }  
}

module.exports = AuthController