const express = require("express");
const router = express.Router();
const Pitanje = require('../models/pitanje');


//vraca samo neodgovorena
router.get('/', async (req,res)=>{
    try{
        const pitanja = await Pitanje.find({isOdgovoreno:"false"});
        res.json(pitanja);
    }catch(err){
        res.json({message: err.message})
    }
});

//vraca sva pitanja
router.get('/sva', async (req,res)=>{
    try{
        const pitanja = await Pitanje.find();
        res.json(pitanja);
    }catch(err){
        res.json({message: err.message})
    }
});

//vraca jedno pitanje
router.get('/:pitanjeId', async (req,res)=>{
    try {
        const pitanje = await Pitanje.findById(req.params.pitanjeId);
        res.json(pitanje);
    } catch (err) {
        res.json({message: err.message});
    }
});

//kreiranje pitanja
router.post('/', async (req,res)=>{
    const pitanje = new Pitanje({
        tekst: req.body.tekst,
        email: req.body.email,
        telefon: req.body.telefon,
        isOdgovoreno: "false"
    });

    try {
        const savedPitanje = await pitanje.save();
        res.json(savedPitanje);
    } catch (err) {
        console.log({message: err.message});
    }
});

//brisanje pitanja
router.delete('/:pitanjeId', async (req,res)=>{
    try {
        const pitanje = await Pitanje.deleteOne({_id: req.params.pitanjeId});
        res.json(pitanje);
    } catch (err) {
        res.json({message: err.message});
    }
});

//update pitanja
router.patch('/:pitanjeId', async (req,res)=>{
    try {
        const pitanje = await Pitanje.updateOne({_id: req.params.pitanjeId}, {$set: {
            tekst: req.body.tekst,
            email: req.body.email,
            telefon: req.body.telefon,
            isOdgovoreno: req.body.isOdgovoreno
        }});
        res.json(pitanje);
    } catch (err) {
        res.json({message: err.message});
    }
});

module.exports = router;