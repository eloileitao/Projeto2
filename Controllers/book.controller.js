const BookModel = require('../models/booksModels.js')

console.log("controller books up")
async function get (req, res)
{
    console.log(true)
    try {
        let books=await BookModel.find();
        // console.log(books)
        return res.send(await BookModel.find())
       
    } catch (err) {
        return res.status(400).send({ error: `Could not get books: ${err}` })
    }
}

async function post (req, res)
{
    console.log(true)
    try {
           /* var newBook = new BookModel({
            title:req.body._title,
            cover:req.body._cover,
            author:req.body._autor,
            synopsis:req.body._synopsis,
            releaseDate:req.body._releaseDate,
            category:req.body._category,
            tags:req.body._tags,
            publisher:req.body._publisher,
            numberPages:req.body._numberPages,
            condition:req.body._condition,
            donerName:req.body._donerName,
            donationDate:req.body._donationDate,
            libraryId:req.body._libraryId,
            scores:req.body._scores})*/
            
           // console.log(newBook.title)
           // console.log(newBook)
            //console.log(req.body.username)
            
           // console.log(req.body._title)

           //newBook.save();
           BookModel.create(req.body)
            return res.send(req.body)
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create books: ${err}` })

    }
}


async function put(req,res){
    console.log("editar")
    const idBook=req.params.id
    const error="Could not edit book "
    try{
       if(await BookModel.findOne({_id: idBook})) {
           await BookModel.findByIdAndUpdate( idBook,req.body)
           /*console.log(idUser)
           console.log(req.params.id)
           console.log(req.body)*/
           return res.send()
           
       }else{
            return res.status(400).send({ error: `Could not find id: ${idBook}` })
       }
    }catch(err){
        
        return res.status(400).send({ error: error+err })
    }
}

async function del(req, res) {
    const _id = req.params.id
    try {
        console.log(_id)
        await BookModel.findByIdAndDelete(_id)
        console.log("removed")
        return res.send("removed")
    }

    catch (err) {
        return res.status(400).send({ error: `Could not remove Book: ${err}` })

    }
}


module.exports = { get , post, put, del }