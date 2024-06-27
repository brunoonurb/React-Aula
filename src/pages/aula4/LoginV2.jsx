import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginV2() {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  let navigator = useNavigate()

  function meuOnchangeEmail(event) {
    setEmail(event.target.value);
  }

  function meuOnchangeSenha(event) {
    setSenha(event.target.value);
  }

  async function meuOnSubmit(event) {
    event.preventDefault();
    console.log(senha, email);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", senha);

    try {
      const options = {
        method: "POST",
        mode: "cors",
        body: formData,
      };
      const response = await fetch(
        "http://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        options
      );
      const data = await response.json();
      
      const token = data.token
      const nomeUsuario = data.user.name
      const emailUsuario = data.user.email

      localStorage.setItem("nomeeeee",nomeUsuario )
      localStorage.setItem("email",emailUsuario )
      localStorage.setItem("token", token)
      localStorage.setItem('user',  JSON.stringify(data.user))

      navigator('/')
      
    } catch (error) {
      alert("DEU ERRO");
      console.log(error);
    }
  }

  return (
    <div className="App">
      <p>LOGIN v2</p>

      <form onSubmit={meuOnSubmit}>
        <br />
        <label>EMAIL: {email}</label>
        <br />
        <input type="text" onChange={meuOnchangeEmail} />
        <br />
        <br />
        <label>SENHA: {senha}</label>
        <br />
        <input type="password" onChange={meuOnchangeSenha} />

        <br />
        <br />
        <br />

        <button type="submit"> LOGIN</button>
      </form>
    </div>
  );
}

export { LoginV2 };
