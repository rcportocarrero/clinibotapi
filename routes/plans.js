// Endpoints for external data
const { Router } = require('express');
const router = new Router();
const plans = require('../components/plans')
//const jwt = require("jsonwebtoken");
//const usuarios = require('../helpers/usuarios');

router.get('/health-plans', async (req, res) => {

 const data = await plans.getPlans().then();

 let name = data.map(i => i.name);
 let description = data.map(i => i.description);

 var ht = {
    "name": name,
    "description": description

 }

res.send(ht);

});



module.exports = router;