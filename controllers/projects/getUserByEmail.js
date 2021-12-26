const {NotFound} = require("http-errors");
const { User } = require("../../models/project")

const getUserByEmail = async(req, res)=> {
    const {email} = req.body;
    const data = await User.find(email).populate("email");
    console.log(data)
    if(!data){
        throw new NotFound(`User ${email} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data,
    })
}

module.exports = getUserByEmail;