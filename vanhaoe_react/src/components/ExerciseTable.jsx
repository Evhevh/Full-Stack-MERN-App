import ExerciseRow from './ExerciseRow'

function ExerciseTable({ exercises, onDelete, onEdit }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Unit</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map(exercise => (
          <ExerciseRow 
            key={exercise._id}
            exercise={exercise}
            onDelete={onDelete}
            onEdit={() => onEdit(exercise)}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ExerciseTable;