import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Autthencitation from "../components/Autthencitation";

const Dashbaord = () => {

    // https://www.geeksforgeeks.org/reactjs-usenavigate-hook/
    const navigate = useNavigate();


    // empty variable
    // https://react.dev/reference/react/useState
    // set usarname and password are the function s

    // this are the correct login data
    const corectname = 'uncinc'
    const corectpassword = 'letmein'

    // here is the standard value false but that must be depending on the user login
    // is logged in is the variable
    // setIsLoggedIn that is now false but that must be true if the credentials are stored in localStorage
    let [isLoggedIn, setIsLoggedIn] = useState(false)

    console.log(isLoggedIn +' empty state')//log the false empty state if there is no data in localstorage

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
        navigate('../pages/Login');//navigate to the login page
        localStorage.setItem('isLoggedIn',false);
        localStorage.clear();//remove the credentials
        setIsLoggedIn(false);//set it to false


    };

    return (
        <main className="">
            <section>
                <h2>Dashboard</h2>
                {isLoggedIn === true ? (
                    <div>
                        <p>welcome you are logged in</p>
                        {console.log('we have a username ' + corectname + ' password ' + corectpassword)}
                        <button onClick={handleLogout}>log out</button>
                    </div>
                    //     : else show the form
                ) : (
                    //{/*https://legacy.reactjs.org/docs/forms.html*/}
                   <p>you have no access</p>
                )}


            </section>


        </main>
    );
}

export default Dashbaord;