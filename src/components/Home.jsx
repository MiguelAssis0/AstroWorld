import { useStore } from "../store"

export default function Home() {

    const logout = () => {
        useStore.getState().setLogin(false)
        useStore.getState().setUser({})
        window.location.reload()
    }

    console.log(useStore.getState().user)
    return (
        <div className="content-home">
            <h1>Home</h1>
            <button onClick={logout}>Sair</button>
        </div>
    )
}