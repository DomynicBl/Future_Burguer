const Filter = ({ filter, setFilter }) => {
    return (
        <div className="Filter">
            <div className="filter-options">
                <div>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} >
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="InCompleted">Pendentes</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Filter;
