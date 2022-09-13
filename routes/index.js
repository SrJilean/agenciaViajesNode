import express from 'express'
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
} from '../controllers/paginaController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:viaje', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

// router.get('/contacto', );

// app.get('/', (req, res) => { // req- lo que enviamos : res- lo que express nos responde

//     res.send('Inicio');

//     //res.render(); // Genera HTML

//     //res.json({
//     //    id: 1
//     //})
// });

export default router;