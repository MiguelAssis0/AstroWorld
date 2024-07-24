import { useStore } from "../store"
import Explore from "./Explore"
import Pessoal from "./Pessoal"
import "../public/Home.css"
import { useEffect, useState } from "react"

const logout = () => {
    useStore.getState().setLogin(false)
    useStore.getState().setUser({})
    window.location.reload()
}

export default function Home() {
    const [currentPage, setCurrentPage] = useState("Pessoal");

    const PageChange = (e)=>{
        setCurrentPage(e.target.id);
        const btnPessoal = document.getElementById("Pessoal")
        const btnExplore = document.getElementById("Explore")

        if(e.target.id === "Pessoal"){
            btnPessoal.classList.add("active")
            btnExplore.classList.remove("active")
        }else{
            btnPessoal.classList.remove("active")
            btnExplore.classList.add("active")
        }
    }

    const renderCurrentPage = () =>{
        switch(currentPage){
            case "Pessoal":
                return <Pessoal/>
            case "Explore":
                return <Explore/>
        }
    }

    useEffect(() => {
        PageChange({target: {id: "Pessoal"}})
    }, [])

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