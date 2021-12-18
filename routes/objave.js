const express = require("express");
const router = express.Router();
const Objava = require('../models/objava');

//vraca sve objave
router.get('/', async (req,res)=>{
    try{
        const objava = await Objava.find().sort({viewCounter:-1});
        res.json(objava);
    }catch(err){
        res.json({message: err.message})
    }
});

//vraca sve objave za slanje
router.get('/primanje', async (req,res)=>{
    try{
        const objava = await Objava.find({kategorija: "primanje"}).sort({viewCounter:-1});
        res.json(objava);
    }catch(err){
        res.json({message: err.message})
    }
});

//vraca sve objave za slanje
router.get('/slanje', async (req,res)=>{
    try{
        const objava = await Objava.find({kategorija: "slanje"}).sort({viewCounter:-1});
        res.json(objava);
    }catch(err){
        res.json({message: err.message})
    }
});

//vraca jednu objavu
router.get('/:objavaId', async (req,res)=>{
    try {
        const objava = await Objava.findById(req.params.objavaId);
        res.json(objava);
    } catch (err) {
        res.json({message: err.message});
    }
});

//kreiranje objave
router.post('/', async (req,res)=>{
    const objava = new Objava({
        naslov: req.body.naslov,
        tekst: req.body.tekst,
        viewCounter: 1,
        kategorija: req.body.kategorija
    });

    try {
        const savedObjava = await objava.save();
        res.json(savedObjava);
    } catch (err) {
        console.log({message: err.message});
    }
});

//brisanje objave
router.delete('/:objavaId', async (req,res)=>{
    try {
        const objava = await Objava.deleteOne({_id: req.params.objavaId});
        res.json(objava);
    } catch (err) {
        res.json({message: err.message});
    }
});

//update objave
router.patch('/:objavaId', async (req,res)=>{
    try {
        const objava = await Objava.updateOne({_id: req.params.objavaId}, {$set: {
            naslov: req.body.naslov,
            tekst: req.body.tekst,
            viewCounter: req.body.viewCounter,
            kategorija: req.body.kategorija
        }});
        res.json(objava);
    } catch (err) {
        res.json({message: err.message});
    }
});

module.exports = router;