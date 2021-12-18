const express = require("express");
const router = express.Router();
const Faq = require('../models/faq');


//vraca sva faq-e
router.get('/', async (req,res)=>{
    try{
        const faq = await Faq.find();
        res.json(faq);
    }catch(err){
        res.json({message: err.message})
    }
});

//vraca jedan faq
router.get('/:faqId', async (req,res)=>{
    try {
        const faq = await Faq.findById(req.params.faqId);
        res.json(faq);
    } catch (err) {
        res.json({message: err.message});
    }
});

//kreiranje faq-a
router.post('/', async (req,res)=>{
    const faq = new Faq({
        pitanje: req.body.pitanje,
        odgovor: req.body.odgovor,
        viewCounter: 1
    });

    try {
        const savedFaq = await faq.save();
        res.json(savedFaq);
    } catch (err) {
        console.log({message: err.message});
    }
});

//brisanje faq-a
router.delete('/:faqId', async (req,res)=>{
    try {
        const faq = await Faq.deleteOne({_id: req.params.faqId});
        res.json(faq);
    } catch (err) {
        res.json({message: err.message});
    }
});

//update faq-a
router.patch('/:faqId', async (req,res)=>{
    try {
        const faq = await Faq.updateOne({_id: req.params.faqId}, {$set: {
            pitanje: req.body.pitanje,
            odgovor: req.body.odgovor,
            viewCounter: req.body.viewCounter
        }});
        res.json(faq);
    } catch (err) {
        res.json({message: err.message});
    }
});

module.exports = router;