const UserModel = require('../models/userModels.js')

console.log("controller users up")
async function getUser (req, res)
{
    console.log(true)
    try {
        let users=await UserModel.find();
        // console.log(users)
        return res.send(await UserModel.find())
       
    } catch (err) {
        return res.status(400).send({ error: `Could not get users: ${err}` })
    }
}

async function postUser (req, res)
{
    try {
        await UserModel.create(req.body)
        return res.send(req.body)
    }catch (err) {
        return res.status(400).send({ error: `Could not create user: ${err}` })
    }
}




////OU
async function putUser(req,res){
    console.log("editar")
    const idUser=req.params.id
    const error="Could not edit user "
    try{
       if(await UserModel.findOne({_id: idUser})) {
           await UserModel.findByIdAndUpdate( idUser,req.body)
           /*console.log(idUser)
           console.log(req.params.id)
           console.log(req.body)*/
           return res.send()
           
       }else{
            return res.status(400).send({ error: `Could not find id: ${idUser}` })
       }
    }catch(err){
        
        return res.status(400).send({ error: error+err })
    }
}

async function delUser(req, res) {
    const _id = req.params.id
    try {
        console.log(_id)
        await UserModel.findByIdAndDelete(_id)
        console.log("removed")
        return res.send("removed")
    }

    catch (err) {
        return res.status(400).send({ error: `Could not remove User: ${err}` })

    }
}




module.exports = { getUser, postUser, putUser, delUser }