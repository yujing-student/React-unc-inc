import {useState} from "react";
import {useNavigate} from "react-router-dom";
const Login = () => {

    // https://www.geeksforgeeks.org/reactjs-usenavigate-hook/
    const navigate = useNavigate();
    // https://react.dev/reference/react/useState
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const corectname = 'uncinc'
    const corectpassword = 'letmein'

    let [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = () => {

        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(username))
        localStorage.setItem('password', JSON.stringify(password))
        // ... actual login logic
    };
    const handleLogout = () => {

        setIsLoggedIn(false);
        localStorage.removeItem('user', JSON.stringify(username))
        localStorage.removeItem('password', JSON.stringify(password))
        // ... actual login logic
    };

    function handleSubmit(event) {
        event.preventDefault()

        if (username === corectname && password === corectpassword) {

            handleLogin ()
            console.log('login');
            navigate('../pages/Dashboard');

        } else {
            alert("Username and password doesn't exist!");
            console.log('wrong password');
        }

    }

    return (
        <main className="">
            <section>
                <h2>Login</h2>
                {/*https://designcode.io/react-hooks-handbook-conditional-rendering*/}
                {isLoggedIn === true ? (
                    <div>
                        <p>Welkom u bent ingelogd</p>
                        {console.log('we hebben uw gegevens')}
                        <button onClick={handleLogout}>log out</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label>usre input:</label>
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
                        ></input>
                        <button type="submit">Login</button>
                    </form>
                )}

                {/*https://legacy.reactjs.org/docs/forms.html*/}

            </section>
        </main>
    );
}
export default Login;

//todo if i press login with the right credentials i am going to my account and if i am not log in i dont have acces to the account page