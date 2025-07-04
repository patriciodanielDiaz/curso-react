import { useEffect, useState } from "react";
import Layout from '../components/Layout/Layout';
import '../styles/Register.css';

const Register = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[error, setError] = useState("");
    const[isDisabled, setIsDisabled] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        setError("");

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

        const newUser = {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        console.log("Usuario registrado:", newUser);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsDisabled(true);
        alert("Usuario registrado exitosamente");
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
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>
                </section>
            </Layout>
        </>
    );
}

export default Register;