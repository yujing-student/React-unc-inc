const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Unc inc</h1>
            <ul>
                <li>
                    <a className="test" href="/">Home</a>
                </li>
                <li>

                    <a className="test" href="/Dashboard">Dashboard</a>
                </li>
                <li>
                    <a className="test" href="/Login">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;