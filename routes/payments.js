// Endpoints for external data
const { Router } = require('express');
const router = new Router();
const payments = require('../components/payments');


router.get('/get-payments', async (req, res) => {
    const data = await payments.getPayments().then();

    if(data == false){
        res.send("no se registran medios de pago")
    }else{
        const mapDatos = data.map((c) => (c.name));
        res.send(mapDatos);
    
    }


});



module.exports = router;