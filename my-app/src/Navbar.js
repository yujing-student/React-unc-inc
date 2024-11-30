const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Unc inc</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>

                    <a href="/Dashboard">Dashboard</a>
                </li>
                <li>
                    <a href="/Login">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;