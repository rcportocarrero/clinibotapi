// Endpoints for external data
const { Router } = require('express');
const router = new Router();
const pacient = require('../components/pacient')


router.post('/find-pacient', async (req, res) => {
 var dni = req.body.dni;
  const data = await pacient.getPacient(dni);
  console.log(data)

if(data == false){
    res.status(404).send("data not found");
}else{
    var msg = {status:data};
  res.send(msg);   
}
});

router.post('/find-recipe', async (req, res) => {
    var dni = req.body.dni;
    console.log(dni)
     const data = await pacient.getRecipe(dni);
     if(data == false){
        res.send("No se han formulado medicamentos")
     }
     res.send(data);
});

router.post('/find-diagnostic', async (req, res) => {
    var dni = req.body.dni;
     const data = await pacient.getDiagnostic(dni);
     if(data == false){
        res.send("No se han formulado medicamentos")
     }
     res.send(data);
});
router.post('/agendar-cita', async (req, res) => {
    const {num_doc,tipo,dia,hora,payment_code} = req.body;

     const data = await pacient.insertCita(num_doc,tipo,dia,hora,payment_code);
 
     res.send(data);
});



module.exports = router;