import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


//trying to use a component
import Autent from "../components/Aut";
// here above are the imports
// const login is a react component
const Login = () => {



    // https://www.geeksforgeeks.org/reactjs-usenavigate-hook/
    const navigate = useNavigate();


    // empty variable
    // https://react.dev/reference/react/useState
    // set usarname and password are the function s
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // this are the correct login data
    const corectname = 'uncinc'
    const corectpassword = 'letmein'

    // here is the standard value false but that must be depending on the user login
    // is logged in is the variable


    // setIsLoggedIn that is now false but that must be true if the credentials are stored in localStorage
    let [isLoggedIn, setIsLoggedIn] = useState(false)

    console.log(isLoggedIn +' empty state')//log the false empty state if there is no data in localstorage and
    // set it to true if there is data

    // here the data is stored if the user has logged in
    // by application local storage there you can see the data
    const handleLogin = () => {
        localStorage.setItem('isLoggedIn',true);
        localStorage.setItem('user', JSON.stringify(username))
        localStorage.setItem('password', JSON.stringify(password))
        setIsLoggedIn(true);//


    };

    // https://react.dev/reference/react/useEffect
    // with hooks the useffect checkts if the value is true it is something that checks the state every time and is not a boolean like true or false
    useEffect(() => {
        const checkValue = localStorage.getItem('isLoggedIn');//make a variable and retrieve the localstorage
        if (checkValue === 'true') {//check if isloggedin is true
            setIsLoggedIn(true);//set this to true

        }
        else {
            setIsLoggedIn(false);//set it to false

        }
    }, []);

    // log out function
    const handleLogout = () => {
        localStorage.removeItem('uncinc') //remove the username
        localStorage.removeItem('letmein')//remove the password
        navigate('../pages/Login');
        localStorage.setItem('isLoggedIn',false);
        localStorage.clear();
        setIsLoggedIn(false);//set it to false


    };


    // handlesubmit

    function handleSubmit(event) {
        event.preventDefault()
        // if islogged seth the value to true
        if(isLoggedIn) {
            setIsLoggedIn(true)

        }

        // if the username and password are correct do a callback to the handle login and navigate to dashbaord
        if (username === corectname && password === corectpassword) {
            handleLogin ()
            console.log('you are logged in');
            navigate('../pages/Dashboard');

        } else {
            // give a alert incorrect username and passowrd
            alert("Username and password doesn't exist!");
            console.log('wrong password');
        }

    }

    return (
        <main className="">
            <section>
                <h2>Login</h2>
                {/*https://designcode.io/react-hooks-handbook-conditional-rendering*/}
                {/*ternary operator if islogged === true show the welcome message else show the input form*/}
                {isLoggedIn === true ? (
                    <div>
                        <p>Welkom u bent ingelogd</p>
                        {console.log('we have a username '+ corectname+ ' password ' + corectpassword)}
                        <button onClick={handleLogout} >log out</button>
                    </div>
                //     : else show the form
                ) : (
                    //{/*https://legacy.reactjs.org/docs/forms.html*/}
                    <form onSubmit={handleSubmit}>
                        {console.log('we do not have your data')}
                        <label>user input:</label>
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>geef het wachtwooord op:</label>
                        <input type="password"
                               required
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        >

                        </input>
                        <button type="submit">Login</button>
                    </form>
                )}


            </section>
        </main>
    );
}
export default Login;

//todo if i press login with the right credentials i am going to my account and if i am not log in i dont have acces to the account page