const tagModel = require('../models/tagsModels.js')

console.log("controller tag up")
async function get (req, res)
{
    console.log(true)
    try {
        let tag=await tagModel.find();
        // console.log(users)
        return res.send(await tagModel.find())
       
    } catch (err) {
        return res.status(400).send({ error: `Could not get tags: ${err}` })
    }
}

async function post (req, res)
{
    console.log(true)
    try {
            
           
            tagModel.create(req.body)
            return res.send(req.body)
    
    }catch (err) {
        return res.status(400).send({ error: `Could not create tags: ${err}` })

    }
}


async function put(req,res){
    console.log("editar")
    const idTag=req.params.id
    const error="Could not edit tag"
    try{
       if(await tagModel.findOne({_id: idTag})) {
           await tagModel.findByIdAndUpdate( idTag,req.body)
         
           return res.send()
           
       }else{
            return res.status(400).send({ error: `Could not find id: ${idTag}` })
       }
    }catch(err){
        
        return res.status(400).send({ error: error+err })
    }
}

async function del(req, res) {
    const _id = req.params.id
    try {
        console.log(_id)
        await tagModel.findByIdAndDelete(_id)
        console.log("removed")
        return res.send("removed")
    }

    catch (err) {
        return res.status(400).send({ error: `Could not remove tag: ${err}` })

    }
}


module.exports = { get , post, put, del }