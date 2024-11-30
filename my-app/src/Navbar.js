import logo from './logo-unc-inc.png';

const Navbar = () => {
    return (


        <nav className="navbar">
            <img src={logo} alt="project of unc inc"/>
            <ul className="ListItems">
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
