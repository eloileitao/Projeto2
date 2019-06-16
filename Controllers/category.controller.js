const categoryModel = require('../models/categoryModels.js')

console.log("controller category up")
async function get (req, res)
{
    console.log(true)
    try {
        let categories =await categoryModel.find();
        // console.log(books)
        return res.send(await categoryModel.find())
       
    } catch (err) {
        return res.status(400).send({ error: `Could not get category: ${err}` })
    }
}

async function post (req, res)
{
    console.log(true)
    try {
          
            console.log(req.body)

         
           categoryModel.create(req.body)
            return res.send(req.body)
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create category: ${err}` })

    }
}


async function put(req,res){
    console.log("editar")
    const id=req.params.id
    const error="Could not edit tag"
    try{
       if(await categoryModel.findOne({_id: id})) {
           await categoryModel.findByIdAndUpdate( id,req.body)
         
           return res.send()
           
       }else{
            return res.status(400).send({ error: `Could not find id: ${id}` })
       }
    }catch(err){
        
        return res.status(400).send({ error: error+err })
    }
}

async function del(req, res) {
    const _id = req.params.id
    try {
        console.log(_id)
        await categoryModel.findByIdAndDelete(_id)
        console.log("removed")
        return res.send("removed")
    }

    catch (err) {
        return res.status(400).send({ error: `Could not remove category: ${err}` })

    }
}

module.exports = { get , post, put, del }