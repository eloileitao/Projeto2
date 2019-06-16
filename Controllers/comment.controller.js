const commentModel = require('../models/commentModels.js')

console.log("controller comment up")
async function get (req, res)
{
    console.log(true)
    try {
        let comment=await commentModel.find();
        // console.log(users)
        return res.send(await commentModel.find())
       
    } catch (err) {
        return res.status(400).send({ error: `Could not get comments: ${err}` })
    }
}

async function post (req, res)
{
    console.log(true)
    try {
            
           
            commentModel.create(req.body)
            return res.send(req.body)
    
    }catch (err) {
        return res.status(400).send({ error: `Could not create comments: ${err}` })

    }
}



module.exports = { get , post }