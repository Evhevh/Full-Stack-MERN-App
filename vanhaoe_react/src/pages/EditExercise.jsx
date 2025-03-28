import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditExercise({ exerciseToEdit }) {

  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);
  
  const navigate = useNavigate()

  const editExercise = async () => {
    const editedExercise = {
        name,
        reps: Number(reps), 
        weight: Number(weight), 
        unit,
        date,
    };

    const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedExercise),
    });

    if (response.status === 200) {
        alert('Successfully edited the exercise!');
        navigate('/');
    } else {
        alert(`Failed to edit exercise, status code = ${response.status}`);
        navigate('/');
    }
};

  return (
    <div className="create-page">
      <h2>Edit Exercise</h2>
      
      <div className="form-group">
        <label>Exercise Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={e => setReps(e.target.value)}
          min="1"
        />
      </div>

      <div className="form-group">
        <label>Weight:</label>
        <input
          type="number"
          value={weight}
          onChange={e => setWeight(e.target.value)}
          min="1"
        />
      </div>

      <div className="form-group">
        <label>Unit:</label>
        <select
          value={unit}
          onChange={e => setUnit(e.target.value)}
        >
          <option value="kgs">kgs</option>
          <option value="lbs">lbs</option>
        </select>
      </div>

      <div className="form-group">
        <label>Date (MM-DD-YY):</label>
        <input
          type="text"
          value={date}
          onChange={e => setDate(e.target.value)}
          pattern="\d{2}-\d{2}-\d{2}"
        />
      </div>

      <button 
        className="submit-button"
        onClick={editExercise}
      >
        Edit Exercise
      </button>
    </div>
  )
}

export default EditExercise