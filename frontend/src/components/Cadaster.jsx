import "../public/Cadaster.css"
import { useStore } from "../store"


const cadaster = async (e) => {
    e.preventDefault()
    const username = document.getElementById("Iusername").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if (!username || !email || !password) return alert("Preencha todos os campos")
    const user = {
        username: username,
        email: email,
        password: password
    }
    try {
        const response = await fetch("https://backend-delta-wheat.vercel.app", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if (!response.ok) {
            return response.json().then(data => alert(data.error))
        }
        const data = await response.json()
        useStore.getState().setLogin(true)
        useStore.getState().setUser(data)
        window.location = "/" 
    } catch (err) {
        alert(err.message)
    }
}


export default function Cadaster() {
    return (
        <div className="cadaster">
            <form onSubmit={cadaster}>
                <h1>Cadastrar</h1>
                <input type="text" name="username" id="Iusername" placeholder="Nome" required />
                <input type="email" name="email" id="email" placeholder="Email" required />
                <input type="password" name="password" id="password" placeholder="Senha" required />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}