import { useStore } from "../store"
import Explore from "./Explore"
import Pessoal from "./Pessoal"
import "../public/Home.css"
import { useState } from "react"

export default function Home() {
    const [currentPage, setCurrentPage] = useState("Pessoal");

    const PageChange = (e)=>{
        setCurrentPage(e.target.id);
    }

    const renderCurrentPage = () =>{
        switch(currentPage){
            case "Pessoal":
                return <Pessoal/>
            case "Explore":
                return <Explore/>
        }
    }

    const logout = () => {
        useStore.getState().setLogin(false)
        useStore.getState().setUser({})
        window.location.reload()
    }
    return (
        <div className="content-home">
            <section className="content-home__sidebar">
                <ul>
                    <li id="Pessoal" onClick={(e) => PageChange(e)}>Pessoal</li>
                    <li id="Explore" onClick={(e) => PageChange(e)}>Explorar</li>
                </ul>
                <button onClick={logout}>Sair</button>
            </section>
            <section className="content-home__main">
                {renderCurrentPage()}
            </section>
            
        </div>
    )
}