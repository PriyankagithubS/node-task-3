import express from 'express';
import { createStudent, updateStudent, getStudents, updateStudentMentor, getPreviousMentors } from '../Controllers/student.controller.js';

const router = express.Router();

// Define the routes
router.post('/create', createStudent);
router.put('/update/:id', updateStudent);
router.get('/getstudents', getStudents);
router.put('/update-mentor/:id', updateStudentMentor); // This should be a PUT request
router.get('/get-previous-mentors/:id', getPreviousMentors); // This

export default router;