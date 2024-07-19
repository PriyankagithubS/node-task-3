import express from 'express';
import { createMentor, getAssignedStudents, assignMultipleStudents } from '../Controllers/mentor.controller.js';

const router = express.Router();

router.post('/create', createMentor);
router.get('/students/:id', getAssignedStudents);
router.put('/assign-multiple/:id', assignMultipleStudents);

export default router;
