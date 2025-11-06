export default function StudentItem({ student, onDelete }) {
  const passed = student.grade >= 60
  const liClass = `student-item ${passed ? 'student-pass' : 'student-fail'}`
  return (
    <li className={liClass}>
      <div>
        <span className="student-name">{student.name}</span>
        <span className="student-grade"> - {student.grade}</span>
        <span className="student-status">{passed ? 'Pass' : 'Fail'}</span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(student.id)} aria-label={`Delete ${student.name}`}>
        Delete
      </button>
    </li>
  )
}
