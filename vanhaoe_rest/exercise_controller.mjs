import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './exercise_model.mjs';
import { body , validationResult, checkExact } from 'express-validator'

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    await exercises.connect();
    console.log(`Server listening on port ${PORT}...`);
});

//Given date validation function
function isDateValid(date) {
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

// Validation function using express validator
const exerciseValidation = [
    body('name').isString().notEmpty(),
    body('reps').isInt({ min: 1 }),
    body('weight').isInt({ min: 1 }),
    body('unit').isIn(['kgs', 'lbs']),
    body('date').custom(value => {
        if (!isDateValid(value)) throw new Error('Invalid date format');
        return true;
    }),
    checkExact()
];

//Create using POST /exercises
app.post('/exercises', exerciseValidation, asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Error: "Invalid request" });
    }
    const exercise = await exercises.createExercise(req.body);
    res.status(201).json(exercise);
}));


//Read using GET /exercises
app.get('/exercises', asyncHandler(async (req, res) => {
    const allExercises = await exercises.findExercises({});
    res.status(200).json(allExercises);
}));

//GET using GET /exercises/:_id
app.get('/exercises/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const exercise = await exercises.findExercisesById(id);
    if (exercise) {
        res.status(200).json(exercise);
    } else {
        res.status(404).json({ Error: "Not found" });
    }
}));

//Update using PUT /exercises/:_id
app.put('/exercises/:id', exerciseValidation, asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Error: "Invalid request "});
    }
    const id = req.params.id;
    const updatedExercise = await exercises.updateExerciseById(id, req.body);
    if (updatedExercise) {
        res.status(200).json(updatedExercise);
    } else {
        res.status(404).json({ Error: "Not found" });
    }
}));


//DELETE using DELETE /exercises/:_id
app.delete('/exercises/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deletedExercise = await exercises.deleteExercisesById(id);
    if (deletedExercise) {
        res.status(204).end();
    } else {
        res.status(404).json({ Error: "Not found" });
    }
}));
