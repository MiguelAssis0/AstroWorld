import "../public/Login.css"
import { useStore } from "../store"

const login = async (event) => {
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if (!email || !password) return alert("Preencha todos os campos")
    try {
        const response = await fetch("https://backend-delta-wheat.vercel.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        if (!response.ok) return alert("Email ou senha incorretos")
        const data = await response.json()
        useStore.getState().setLogin(true)
        useStore.getState().setUser(data)
        window.location = "/"
    } catch (error) {
        alert(error.message)
    }
}

export default function Login() {    
    return(
        <div className="login">
            
            <form onSubmit={login}>
                <h1>Login</h1>
                <input type="email" name="email" id="email" placeholder="Email" required />
                <input type="password" name="password" id="password" placeholder="Senha" required />
                <input type="submit" value="Entrar" />
            </form>
        </div>
    )
}