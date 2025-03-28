import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateExercise() {
  const [formData, setFormData] = useState({
    name: '',
    reps: '',
    weight: '',
    unit: 'kgs',
    date: ''
  })
  const navigate = useNavigate()

  const addExercise = async () => {

    //create new exercise object from form data
    const newExercise = {
        name: formData.name,
        reps: Number(formData.reps),
        weight: Number(formData.weight),
        unit: formData.unit,
        date: formData.date,
    };

    const response = await fetch('/exercises', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExercise),
    });

    if (response.status === 201) {
        alert('Successfully added the exercise!');
        navigate('/');
    } else {
        alert(`Failed to add exercise, status code = ${response.status}`);
        navigate('/');
    }
};

  return (
    <div className="create-page">
      <h2>Add New Exercise</h2>
      
      <div className="form-group">
        <label>Exercise Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          placeholder="Enter exercise name"
        />
      </div>

      <div className="form-group">
        <label>Reps:</label>
        <input
          type="number"
          value={formData.reps}
          onChange={e => setFormData({...formData, reps: e.target.value})}
          placeholder="Enter number of reps"
          min="1"
        />
      </div>

      <div className="form-group">
        <label>Weight:</label>
        <input
          type="number"
          value={formData.weight}
          onChange={e => setFormData({...formData, weight: e.target.value})}
          placeholder="Enter weight"
          min="1"
        />
      </div>

      <div className="form-group">
        <label>Unit:</label>
        <select
          value={formData.unit}
          onChange={e => setFormData({...formData, unit: e.target.value})}
        >
          <option value="kgs">kgs</option>
          <option value="lbs">lbs</option>
        </select>
      </div>

      <div className="form-group">
        <label>Date (MM-DD-YY):</label>
        <input
          type="text"
          value={formData.date}
          onChange={e => setFormData({...formData, date: e.target.value})}
          placeholder="MM-DD-YY"
          pattern="\d{2}-\d{2}-\d{2}"
        />
      </div>

      <button 
        className="submit-button"
        onClick={addExercise}
      >
        Add Exercise
      </button>
    </div>
  )
}

export default CreateExercise