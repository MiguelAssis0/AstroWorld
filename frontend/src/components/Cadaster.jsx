import "../public/Cadaster.css";
import { useStore } from "../store";
import { API_URL } from "./Api";
import axios from "axios";

const cadaster = async (e) => {
  e.preventDefault();
  const username = document.getElementById("Iusername").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!username || !email || !password) {
    return alert("Preencha todos os campos");
  }

  const user = {
    username,
    email,
    password,
  };

  try {
    const response = await axios.post(`${API_URL}/cadaster`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // A resposta já está no formato JSON e pode ser acessada diretamente
    const data = response.data;

    // Atualiza o estado global e redireciona
    useStore.getState().setLogin(true);
    useStore.getState().setUser(data);
    window.location = "/";
  } catch (err) {
    alert(err.message);
  }
};

export default function Cadaster() {
  return (
    <div className="cadaster">
      <form onSubmit={cadaster}>
        <h1>Cadastrar</h1>
        <input
          type="text"
          name="username"
          id="Iusername"
          placeholder="Nome"
          required
        />
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
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}
