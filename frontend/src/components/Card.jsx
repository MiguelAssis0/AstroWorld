import { MdDeleteOutline } from "react-icons/md";

const readMore = (id) => {
    const rM = document.getElementsByClassName(`${id}`)
    const black = document.querySelector(".black")
    black.style.display = "block"
    rM[0].style.display = "flex"
}

function closeReadMore(id) {
    const rM = document.getElementsByClassName(`${id}`)
    const black = document.querySelector(".black")
    black.style.display = "none"
    rM[0].style.display = "none"
}

const deletePost = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/deletePost`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        if (!response.ok) return alert("Falha ao deletar o post, por favor tente novamente em alguns minutos")
        window.location.reload()
    } catch (error) {
        alert(error.message);
    }
}

export default function Card(props) { 

    return (
        <div>
            <div className="content-pessoal__view-posts">
                {props.posts.map((post) => {
                    return (
                        <div key={post.id} className="content-pessoal__post">
                            <img src={post.photo} alt="" />
                            <div>
                                <h3>{post.name}</h3>
                                <span className="temperature">Temperatura: {post.temperature}ºC</span>
                                <p>{post.description.length > 100 ? post.description.substring(0, 150) + "..." : post.description}</p>
                                <article className="options">
                                    <button id={post.id} onClick={() => readMore(post.id)}>Ler mais</button>    
                                    <MdDeleteOutline className="del" onClick={() => deletePost(post.id)} />
                                </article>
                            </div>
                        </div>
                    )
                })}
            </div>
            <section className="postsInfo">
                {props.posts.map((post) => {
                    return (
                        <div className={post.id + " readMore"} key={post.id} id={post.id} style={{ display: "none" }}>
                            <div>
                                <span className="close" style={{ zIndex: "1" }} onClick={() => closeReadMore(post.id)}>X</span>
                                <h3>{post.name}</h3>
                        
                            </div>

                            <img src={post.photo} alt="" />
                            <span className="temperature">Temperatura: {post.temperature}ºC</span>
                            <p>{post.description}</p>
                        </div>
                    )
                })}
            </section> 
            <div className="black"></div>
        </div>
    )
}