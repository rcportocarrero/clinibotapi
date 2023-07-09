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
    if(data < 5){
        res.send("Su familiar no se encuentra internado.");
    }else if(data == 5){
        res.send("Estado del paciente: En Emergencias");
    }else if(data == 6){
        res.send("El paciente ya se encuentra dado de alta");
    }
   
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



module.exports = router;