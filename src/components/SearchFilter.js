function SearchFilter({handleInputChange}) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="nameFilter">Search by Name</label>
                        <input type="text" className="form-control" name="search" id="nameFilter" onChange={handleInputChange}></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchFilter;