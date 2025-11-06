import { useState, useMemo } from 'react'
import './styles/lab-styles.css'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
import StudentControls from './components/StudentControls'

const initialStudents = [
  { id: 1, name: 'Elif', grade: 86 },
  { id: 2, name: 'Baran', grade: 73 },
  { id: 3, name: 'Deniz', grade: 58 },
]

export default function App() {
  const [students, setStudents] = useState(initialStudents)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('desc')

  function addStudent(newStudent) {
    const exists = students.some(s => s.name.trim().toLowerCase() === newStudent.name.trim().toLowerCase())
    if (exists) return
    setStudents(prev => [...prev, newStudent])
  }

  function deleteStudent(id) {
    setStudents(prev => prev.filter(s => s.id !== id))
  }

  const visibleStudents = useMemo(() => {
    let list = [...students]
    if (filter === 'pass') list = list.filter(s => s.grade >= 60)
    else if (filter === 'fail') list = list.filter(s => s.grade < 60)
    const term = searchTerm.trim().toLowerCase()
    if (term) list = list.filter(s => s.name.toLowerCase().includes(term))
    list.sort((a, b) => (sortOrder === 'desc' ? b.grade - a.grade : a.grade - b.grade))
    return list
  }, [students, filter, searchTerm, sortOrder])

  const sortLabel = sortOrder === 'desc' ? 'High-Low' : 'Low-High'

  return (
    <div className="app">
      <h1 className="header">Student Dashboard</h1>
      <StudentForm onAdd={addStudent} />
      <StudentControls
        activeFilter={filter}
        onChangeFilter={setFilter}
        searchTerm={searchTerm}
        onChangeSearch={setSearchTerm}
        sortLabel={sortLabel}
        onToggleSort={() => setSortOrder(prev => (prev === 'desc' ? 'asc' : 'desc'))}
      />
      {searchTerm.trim() && visibleStudents.length === 0 ? (
        <p className="no-data">No students match "<em>{searchTerm}</em>"</p>
      ) : (
        <StudentList students={visibleStudents} onDelete={deleteStudent} />
      )}
    </div>
  )
}
