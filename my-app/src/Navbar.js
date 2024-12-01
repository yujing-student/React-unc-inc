import logo from './img/logo-unc-inc.png';

const Navbar = () => {
    return (


        <nav className="navbar">
            <img src={logo} alt="project of unc inc"/>
            <ul className="ListItems">
                <li>
                    <a className="ListLink" href="/">Home</a>
                </li>
                <li>

                    <a className="ListLink disabled" href="/pages/Dashboard">Dashboard</a>
                </li>
                <li>
                    <a className="ListLink" href="/pages/Login">Login</a>
                </li>
                <li>
                    <a className="ListLink" href="/pages/Account">Account</a>
                </li>
            </ul>
        </nav>


    );
}


export default Navbar;
