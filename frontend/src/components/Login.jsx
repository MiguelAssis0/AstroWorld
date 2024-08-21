import axios from "axios";
import "../public/Login.css";
import { useStore } from "../store";
import { API_URL } from "./Api";

const login = async (event) => {
  event.preventDefault(); 
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (!email || !password) {
    return alert("Preencha todos os campos");
  }
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    useStore.getState().setLogin(true);
    useStore.getState().setUser(data);
    window.location = "/";
  } catch (error) {
    console.error('Login error:', error);
    alert("Email ou senha incorretos");
  }
};

export default function Login() {
  return (
    <div className="login">
      <form onSubmit={login}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          required
        />
        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
}
