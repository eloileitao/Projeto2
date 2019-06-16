const libraryModel = require('../models/libraryModels.js')

console.log("controller library up")
async function get (req, res)
{
    console.log(true)
    try {
        let libraries=await libraryModel.find();
        // console.log(books)
        return res.send(await libraryModel.find())
       
    } catch (err) {
        return res.status(400).send({ error: `Could not get libraries: ${err}` })
    }
}

async function post (req, res)
{
    console.log(true)
    try {
          
            console.log(req.body)

         
           libraryModel.create(req.body)
            return res.send(req.body)
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create libraries: ${err}` })

    }
}


async function put(req,res){
    console.log("editar")
    const idLibrary=req.params.id
    const error="Could not edit tag"
    try{
       if(await libraryModel.findOne({_id: idLibrary})) {
           await libraryModel.findByIdAndUpdate( idLibrary,req.body)
         
           return res.send()
           
       }else{
            return res.status(400).send({ error: `Could not find id: ${idLibrary}` })
       }
    }catch(err){
        
        return res.status(400).send({ error: error+err })
    }
}

async function del(req, res) {
    const _id = req.params.id
    try {
        console.log(_id)
        await libraryModel.findByIdAndDelete(_id)
        console.log("removed")
        return res.send("removed")
    }

    catch (err) {
        return res.status(400).send({ error: `Could not remove library: ${err}` })

    }
}

module.exports = { get , post, put, del }