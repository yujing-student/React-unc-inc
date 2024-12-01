import logo from '../img/logo-unc-inc.png';

const Navbar = () => {
    return (


        <nav className="navbar">
            <img src={logo} alt="project of unc inc"/>
            <ul className="ListItems ">
                <li className="animationLink">
                    <a className="ListLink  link" href="/">Home</a>
                </li>
                <li className="animationLink">

                    <a className="ListLink link" href="/pages/Dashboard">Dashboard</a>
                </li>
                <li className="animationLink">
                    <a className="ListLink link" href="/pages/Login">Login</a>
                </li>
            </ul>
        </nav>


    );
}


export default Navbar;
