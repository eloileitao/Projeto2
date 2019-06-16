const requisitionModel = require('../models/requisitionModels.js')

console.log("controller requesition up")
async function get (req, res)
{
    console.log(true)
    try {
        let requisition=await requisitionModel.find();
        // console.log(users)
        return res.send(await requisitionModel.find())
       
    } catch (err) {
        return res.status(400).send({ error: `Could not get requisitions: ${err}` })
    }
}

async function post (req, res)
{
    console.log(true)
    try {
            
           
            requisitionModel.create(req.body)
            return res.send(req.body)
    
    }catch (err) {
        return res.status(400).send({ error: `Could not create requisitions: ${err}` })

    }
}

async function put(req,res){
    console.log("editar")
    const idRequisition=req.params.id
    const error="Could not edit tag"
    try{
       if(await requisitionModel.findOne({_id: idRequisition})) {
           await requisitionModel.findByIdAndUpdate( idRequisition,req.body)
         
           return res.send()
           
       }else{
            return res.status(400).send({ error: `Could not find id: ${idRequisition}` })
       }
    }catch(err){
        
        return res.status(400).send({ error: error+err })
    }
}




module.exports = { get , post, put }