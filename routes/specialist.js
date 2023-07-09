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



module.exports = router;