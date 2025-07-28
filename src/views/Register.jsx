import { useEffect, useState } from "react";
import Layout from '../components/Layout/Layout';
import '../styles/Register.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[error, setError] = useState("");
    const[success, setSuccess] = useState("");
    const[isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!email || !password || !confirmPassword) {
            setError("Faltan completar campos.");
            return;
        }

        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.");
            return;
        }
     
        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        try {
            await register(email, password);

            setSuccess("Usuario registrado con exito");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            setTimeout(() => {
                setSuccess("Redirigiendo a la página de inicio...");
            }, 2000);

            setTimeout(() => {
                navigate("/");
            }, 3000);

        } catch (error) {
            setError("Error al registrar el usuario: " + error.message);
            return;
        }
        console.log("Usuario registrado:", newUser);
        setIsDisabled(true);
    }

    useEffect(() => {
        if (email && password && confirmPassword) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [email, password, confirmPassword]);

    return (
        <>
            <Layout>
                <section id="register-section">
                    <h1>Registro de Usuario</h1>
                    <form onSubmit={handlerSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={handleEmailChange} value={email} />

                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" onChange={handlePasswordChange} value={password} />

                        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleConfirmPasswordChange} value={confirmPassword} />

                        <button disabled={isDisabled} style={{ backgroundColor: isDisabled && "grey", cursor: isDisabled && "not-allowed" }}>Registrar</button>
                        <h5 className="error-message">{error}</h5>
                        <h5 className="success-message">{success}</h5>
                    </form>
                </section>
            </Layout>
        </>
    );
}

export default Register;