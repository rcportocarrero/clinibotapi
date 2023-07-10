// Endpoints for external data
const { Router } = require('express');
const router = new Router();
const specialist = require('../components/specialist');

router.get('/get-specialist', async (req, res) => {
 const data = await specialist.getSpecialist().then();

    if (data == false) {
        res.status(404).send('no data');
    }else{
        res.send(data);
    }
});


router.post('/get-doctor', async (req, res) => {
    var tipo =req.body.tipo;

    console.log(tipo);

    const data = await specialist.getDoctor(tipo).then();
   
       if (data == false) {
           res.status(404).send('no data');
       }else{
           res.send(data);
       }
   });
   


module.exports = router;