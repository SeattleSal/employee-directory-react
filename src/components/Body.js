function Body({ users }) {
    console.log(users);

    return (
        <div className="container row">
            {users.map(user => (
                <div className="card" style={{width: '18rem'}}>
                    <img src={user.picture.large} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                        <p className="card-text">{user.location.city}, {user.location.state} {user.location.country}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{user.email} </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Body;