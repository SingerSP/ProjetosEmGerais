class AuthModel 
{
    email
    password

    constructor(email, password)
    {
        this.email = email
        this.password = password
    }

    login()
    {
        let existe = false

        if(this.email === "carlos@gmail.com" && this.password === "carlos@2025")
        {
            existe = true
        }

        return existe
    }
}

module.exports = AuthModel
