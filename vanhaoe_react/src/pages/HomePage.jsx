import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ExerciseTable from '../components/ExerciseTable';


function HomePage({ setExerciseToEdit }) {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();
    
    //deletes exercises
    const onDelete = async (id) => {
        const response = await fetch(`/exercises/${id}`, 
            {method: 'DELETE'});
        if (response.status === 204) {
            setExercises(exercises.filter((exercise) => exercise._id !== id));
        } else {
            console.error(`Failed to delete movie with id = ${_id}, status code = ${response.status}`)
        }
    };

    //navigates to the edit page with pre-populated data
    const onEdit = exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        navigate("/edit-exercise");
    }

    //gets exercises stored in MongoDB
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect( () => {
        loadExercises();
    }, []);

    return (
    <div>
        <h1>Home Page</h1>
        <ExerciseTable 
            exercises={exercises} 
            onDelete={onDelete} 
            onEdit={onEdit}
        />
    </div>
  );
}

export default HomePage;