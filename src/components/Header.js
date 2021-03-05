function Header() {
    return (
        <header style={{backgroundColor: "#dff9fb"}} className="b-4 mb-1 p-4">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">This is a simple application to view employees. Filter by name or sort by name.</p>
            <p className="lead">Click on Email or Phone Number to contact each employee.</p>
        </header>
    );
}

export default Header;