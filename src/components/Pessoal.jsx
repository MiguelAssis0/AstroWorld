import { useStore } from "../store"

export default function Pessoal(){

    return(
        <div className="content-pessoal">
            <h1>Olá {useStore.getState().user.user.username}, seja bem-vindo!</h1>
        </div>
    )
}