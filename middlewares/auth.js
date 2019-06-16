const jwt=require('jsonwebtoken');
const config=require('../config.js')

module.exports=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    
    if(!authHeader)
        return res.status(401).send({error:'No token provided'});
        
    const parts=authHeader.split(' ');
    
    if(!parts.length===2)
        return res.send(401).send({error:'Token error'});
        
    const [scheme, token]=parts;
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error:'token malformatted'})
        
    jwt.verify(token, config.secret, (err,decoded)=>{
        if(err)
            return res.status(401).send({error:'token invalid'})
            
        req.userId=decoded._id;
        req.username=decoded.username;
        req.userTypeId=decoded.userTypeId;
        req.photo=decoded.photo;
        return next();
        
    });
    
}