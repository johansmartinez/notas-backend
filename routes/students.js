import {Router} from 'express';
import {getNotas,createNota,deleteNota, editNota} from '../controllers/students.controller';

const router= Router();

router.get('/', getNotas);

router.post('/', createNota);

router.delete('/:id', deleteNota);

router.put('/', editNota);

export default router;