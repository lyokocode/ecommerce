import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456789", 10),
        isAdmin: true
    }

]

export default users