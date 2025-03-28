// Get the mongoose object
import mongoose from 'mongoose';
import 'dotenv/config';

let connection = undefined;

/**
 * This function connects to the MongoDB server.
 */
async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
        connection = mongoose.connection;
        console.log("Successfully connected to MongoDB using Mongoose!");
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

//Properties of user document
const exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true, min: 1 },
    weight: { type: Number, required: true, min: 1 },
    unit: { type: String,  required: true, enum: ['kgs', 'lbs'] },
    date: { type: String,  required: true }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

//CRUD operations
//Create
async function createExercise(exerciseData) {
    const exercise = new Exercise(exerciseData);
    return exercise.save();
}

//Retrieve
async function findExercises(filter) {
    return await Exercise.find(filter).exec();
}

async function findExercisesById(id) {
    return await Exercise.findById(id).exec();
}
//Update
async function updateExerciseById(id, updateData) {
    return await Exercise.findByIdAndUpdate(id, { $set: updateData }, { new: true }).exec();
}

//Delete
async function deleteExercises(filter) {
    const result = await Exercise.deleteMany(filter).exec();
    return result;
}
async function deleteExercisesById(id) {
    return await Exercise.findByIdAndDelete(id).exec();
}

export { connect, createExercise, findExercises, findExercisesById, updateExerciseById, deleteExercises, deleteExercisesById};

//GOOD