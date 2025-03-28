import { FaEdit, FaTrash } from 'react-icons/fa'

function ExerciseRow({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>
                <button onClick={() => onEdit(exercise)}>
                    <FaEdit />
                </button>
            </td>
            <td>
                <button onClick={() => onDelete(exercise._id)}>
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}

export default ExerciseRow