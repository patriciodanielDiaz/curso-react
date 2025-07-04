import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/Login.css';

const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const[isDisabled, setIsDisabled] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Faltan completar campos.");
            return;
        }

        const logUser = {
            email: email,
            password: password
        };
        console.log("Usuario logueado:", logUser);
        setEmail("");
        setPassword("");
    }

    useEffect(() => {
        if (email && password) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [email, password]);

    return (
        <>
            <Layout>
                <section id="login-section">
                    <h1>Iniciar Sesión</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={handleEmailChange} value={email} />

                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" onChange={handlePasswordChange} value={password} />

                        <button disabled={isDisabled} style={{ backgroundColor: isDisabled && "grey", cursor: isDisabled && "not-allowed" }}>Ingresar</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>
                </section>
            </Layout>
        </>
    );
}

export default Login;
