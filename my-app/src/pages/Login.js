import {useState} from "react";
import {redirect, useNavigate} from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    // https://react.dev/reference/react/useState
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    //
    const corectname = 'uncinc'
    const corectpassword = 'letmein'

    function handleSubmit(event) {
        event.preventDefault()
        if (username === corectname && password === corectpassword) {
            navigate('../pages/Dashboard');
            console.log('Login successful!');
        } else {
            alert("Username and password doesn't exist!");
            console.log('Login failed!');
        }

    }

    return (
        <main className="">
            <section>
                <h2>Login</h2>
                {/*https://legacy.reactjs.org/docs/forms.html*/}
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
            </section>
        </main>
    );
}
export default Login;

//todo if i press login with the right credentials i am going to my account and if i am not log in i dont have acces to the account page