const jwt = require("jsonwebtoken");



    
verifyAuthToken = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.sendStatus(403)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET , (err, decoded)=>{
        if(err) return res.sendStatus(403)
        req.user = decoded
        console.log(decoded)
        next()

    })
}
    verifyemailToken = (req, res, next)=>{
    
    const token =req.params.token
    if(token == null) return res.sendStatus(403)

    jwt.verify(token, process.env.EMAIL_TOKEN_SECRET , (err, decoded)=>{
        if(err) return res.sendStatus(403)
        req.user = decoded
        req.id = decoded.user_id
        console.log(decoded)
        next()

    })
}



module.exports= {authonticateToken, verifyemailToken }