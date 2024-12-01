import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


const Dashbaord = () => {

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

        localStorage.setItem('isLoggedIn',false);
        localStorage.clear();

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
                <h2>Dashboard</h2>
                {isLoggedIn === true ? (
                    <div>
                        <p>Welkom u bent ingelogd</p>
                        {console.log('we have a username ' + corectname + ' password ' + corectpassword)}
                        <a className="buttonProps" href="/pages/login">log uit</a>
                    </div>
                    //     : else show the form
                ) : (
                    //{/*https://legacy.reactjs.org/docs/forms.html*/}
                   <p>u hebt geen toegang</p>
                )}


            </section>


        </main>
    );
}

export default Dashbaord;