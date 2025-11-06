export default function StudentControls({
  activeFilter,
  onChangeFilter,
  searchTerm,
  onChangeSearch,
  sortLabel,
  onToggleSort,
}) {
  return (
    <div className="controls">
      <div className="filters">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => onChangeFilter('all')}
          type="button"
        >
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === 'pass' ? 'active' : ''}`}
          onClick={() => onChangeFilter('pass')}
          type="button"
        >
          Pass
        </button>
        <button
          className={`filter-btn ${activeFilter === 'fail' ? 'active' : ''}`}
          onClick={() => onChangeFilter('fail')}
          type="button"
        >
          Fail
        </button>
      </div>
      <input
        className="input search"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => onChangeSearch(e.target.value)}
      />
      <button className="btn sort-btn" type="button" onClick={onToggleSort}>
        Sort: {sortLabel}
      </button>
    </div>
  )
}
