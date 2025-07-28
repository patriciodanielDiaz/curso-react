import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/Login.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const[success, setSuccess] = useState("");
    const[isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();

    const { login } = useAuth();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Faltan completar campos.");
            return;
        }

        try {
            await login(email, password);

            setSuccess("Usuario logueado con exito");
            setEmail("");
            setPassword("");

            setTimeout(() => {
                setSuccess("Redirigiendo a la página de inicio...");
            }, 2000);

            setTimeout(() => {
                navigate("/");
            }, 3000);

        } catch (error) {
            setError("Error al loguear el usuario: " + error.message);
            return;
        }
        console.log("Usuario logueado:", logUser);
        setIsDisabled(true);
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
                        <h5 className="error-message">{error}</h5>
                        <h5 className="success-message">{success}</h5>
                    </form>
                </section>
            </Layout>
        </>
    );
}

export default Login;
