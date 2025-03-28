import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import CreateExercise from './pages/CreateExercise'
import EditExercise from './pages/EditExercise'
import './App.css'
import { useState } from 'react'

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <Router>
      <header>
        <h1>Exercise Tracker</h1>
        <p>Personal fitness exercise tracker to track your sets</p>
      </header>
      
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/edit-exercise" element={<EditExercise exerciseToEdit={exerciseToEdit}/>} />
        </Routes>
        <footer>
          © {new Date().getFullYear()} Ethan Van Hao
        </footer>
    </Router>
  )
}

export default App;
