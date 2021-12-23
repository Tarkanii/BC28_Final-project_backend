const { User } = require("../../models");

const getCurrent = async(req, res) => {
    const {authorization = ""} = req.headers;
    const [bearer, token] = authorization.split(" ");

    const user = await User.findOne({token});
    
    if(!user){
        throw new Unauthorized("Unauthorized");
    }

    res.json({
        status: "success",
        code: 200,
        data: {
            user: {
                subscription:user.subscription
            }
        }
    })
}

module.exports = getCurrent