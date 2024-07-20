import { useStore } from "../store"
import "../public/Pessoal.css"

const close = () => {
    const addNewPost = document.querySelector(".content-pessoal__addNewPost")
    const black = document.querySelector(".black")
    black.style.display = "none"
    addNewPost.style.display = "none"
}

const menuAddPost = () => {
    const addNewPost = document.querySelector(".content-pessoal__addNewPost")
    const black = document.querySelector(".black")
    black.style.display = "flex"
    addNewPost.style.display = "flex"
}

export default function Pessoal() {
    return (
        <div className="content-pessoal">
            <h1>Olá {useStore.getState().user.user.username}, seja bem-vindo!</h1>
            <div className="content-pessoal__postsButton">
                <span onClick={menuAddPost}> Novo + </span>
            </div>
            <p>Suas postagens:</p>
            <div className="content-pessoal__addNewPost">
                <form>
                    <div className="content-pessoal__left-page">
                        <label htmlFor="image">Imagem +</label>
                        <input type="file" id="image" name="image" />
                        <input
                            type="text"
                            name="autor"
                            id="autor"
                            placeholder="Nome do autor..."
                        />
                    </div>
                    <div className="content-pessoal__right-page">
                        <span className="close" onClick={close}>X</span>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Nome do corpo celeste..."
                        />
                        <input
                            type="text"
                            name="temperature"
                            id="temperature"
                            placeholder="Temperatura..."
                        />
                        <textarea
                            name="content"
                            id="content"
                            cols="30"
                            rows="10"
                            placeholder="Descrição..."
                        ></textarea>
                        <input
                            type="submit"
                            name="submit"
                            id="submit"
                            value="Publicar"
                        />
                    </div>
                </form>
            </div>
            <div className="black"></div>
        </div>
    )
}