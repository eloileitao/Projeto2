const notificationModel = require('../models/notificationsModels.js')

console.log("controller comment up")
async function get (req, res)
{
    console.log(true)
    try {
        let notification=await  notificationModel.find();
        // console.log(users)
        return res.send(await  notificationModel.find())
       
    } catch (err) {
        return res.status(400).send({ error: `Could not get notifications: ${err}` })
    }
}

async function post (req, res)
{
    console.log(true)
    try {
            
           
            notificationModel.create(req.body)
            return res.send(req.body)
    
    }catch (err) {
        return res.status(400).send({ error: `Could not create notification: ${err}` })

    }
}


async function del(req, res) {
    const _id = req.params.id
    try {
        console.log(_id)
        await notificationModel.findByIdAndDelete(_id)
        console.log("removed")
        return res.send("removed")
    }

    catch (err) {
        return res.status(400).send({ error: `Could not remove notification: ${err}` })

    }
}


module.exports = { get , post, del }