function Body({ employees, search }) {
    console.log(employees);

    return (
        <div className="container row">
            {employees.filter((employee) => 
                employee.name.first.toUpperCase().includes(search.toUpperCase()) ||
                employee.name.last.toUpperCase().includes(search.toUpperCase())
            )
            .map((employee, index) => (
                <div className="card" style={{width: '18rem'}} key={index}>
                    <img src={employee.picture.large} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{employee.name.first} {employee.name.last}</h5>
                        <p className="card-text">{employee.location.city}, {employee.location.state} {employee.location.country}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{employee.email} </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Body;