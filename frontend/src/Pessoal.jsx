import { useStore } from "./store"
import "./public/Pessoal.css"
import { useEffect, useState } from "react"
import Card from "./Card"

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
const addPost = async (e) => {
    e.preventDefault()
    const image = document.querySelector("#image")
    const temperature = document.querySelector("#temperature")
    const title = document.querySelector("#title")
    const content = document.querySelector("#content")
    const user = useStore.getState().user.user.user_id

    if (!image.value || !title.value || !temperature.value || !content.value) return alert("Preencha todos os campos")

    try {
        const post = {
            image: image.value,
            temperature: temperature.value,
            title: title.value,
            content: content.value,
            user: user
        }

        const response = await fetch('http://localhost:5000/addPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })

        if (!response.ok) return alert("Falha ao enviar o post, por favor tente novamente em alguns minutos")
        post.image = ""
        post.temperature = ""
        post.title = ""
        post.content = ""
        window.location.reload()
    } catch (error) {
        alert(error.message)
    }
}

export default function Pessoal() {
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const user = useStore.getState().user.user.user_id
            const response = await fetch(`http://localhost:5000/posts`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user})
            });
            const jsonData = await response.json();

            setPosts(jsonData);
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="content-pessoal">
            <h1>Olá {useStore.getState().user.user.username}, seja bem-vindo!</h1>
            <div className="content-pessoal__postsButton">
                <span onClick={menuAddPost}> Novo + </span>
            </div>
            <p>Suas postagens:</p>
            <div className="content-pessoal__addNewPost">
                <form onSubmit={addPost}>
                    <div className="content-pessoal__left-page">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Nome do corpo celeste..."
                        />

                        <input
                            type="text"
                            id="image"
                            name="image"
                            placeholder="Url da imagem..."
                        />

                        <input
                            type="text"
                            name="temperature"
                            id="temperature"
                            placeholder="Temperatura..."
                        />
                    </div>
                    <div className="content-pessoal__right-page">
                        <span className="close" onClick={close}>X</span>

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
            
            <Card posts={posts} verify={1} />
        </div>
    )
}