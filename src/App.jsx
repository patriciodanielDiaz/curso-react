import { useState } from 'react';
import './App.css'

function App() {

  const[name, setName] = useState("prueba nombre")
  const[surname, setSurname] = useState()
  const[email, setEmail] = useState()
  const[phone, setPhone] = useState()
  const[password, setPassword] = useState()
  const[confirmPassword, setConfirmPassword] = useState()
  const[formData, setFormData] = useState()

  const handleSubmit = () => {

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    if (!name || !surname || !email || !phone || !password) {
      alert("Por favor, completa todos los campos");
      return;
    }

    setFormData({ name, surname, email, phone, password });
    console.log({ name, surname, email, phone, password });
  }

  return (
    <section>
      <h1>Registro </h1>
        <label>
          Nombre:{name}
          <input type="text" id="name" onChange={(e) =>{setName(e.target.value)}} />
        </label>

        <label>
          Apellido:
          <input type="text" id="surname" onChange={(e) =>{setSurname(e.target.value)}} />
        </label>

        <label>
          Email:
          <input type="email" id="email" onChange={(e) =>{setEmail(e.target.value)}} />
        </label>

        <label>
          Teléfono:
          <input type="tel" id="phone" onChange={(e) =>{setPhone(e.target.value)}} />
        </label>

        <label>
          Contraseña:
          <input type="password" id="password" onChange={(e) =>{setPassword(e.target.value)}} />
        </label>

        <label>
          Confirmar Contraseña:
          <input type="password" id="confirm-password" onChange={(e) =>{setConfirmPassword(e.target.value)}} />
        </label>

        <button onClick={handleSubmit}>Registrar </button>
      <p>
        {formData ? (
          <span>
            Nombre: {formData.formName}<br />
            Apellido: {formData.surname}<br />
            Email: {formData.email}<br />
            Teléfono: {formData.phone}<br />
            Contraseña: {formData.password}
          </span>
        ) : ("")}
      </p>

    </section>
  )
}

export default App
