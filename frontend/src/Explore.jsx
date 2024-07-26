import { useState, useEffect } from "react"
import "./public/Explore.css"
import "./public/Pessoal.css"


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

export default function Explore() {
    const [posts, setPosts] = useState([])

    const getPosts = async (e) => {
        try {
            const response = await fetch(`http://localhost:5000/postsExplore`);
            const jsonData = await response.json();
            setPosts(jsonData);
        } catch (error) {
            alert(error.message);
        }
        
        const search = document.querySelector('#search').value
        if (search) {
            try {
                e.preventDefault();
                const response = await fetch(`http://localhost:5000/postsSearch`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ search })
                });
                const jsonData = await response.json();

                setPosts(jsonData);
            } catch (error) {
                alert(error.message);
            }
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="content-explore">
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="search" onChange={getPosts} id="search" placeholder="Pesquisar..." />
            </form>
            
            <div>
            <div className="content-pessoal__view-posts">
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="content-pessoal__post">
                            <img src={post.photo} alt="" />
                            <div>
                                <h3>{post.name}</h3>
                                <p>{post.description.length > 100 ? post.description.substring(0, 150) + "..." : post.description}</p>

                                <article className="options">
                                    <button id={post.id} onClick={() => readMore(post.id)}>Ler mais</button>    
                                </article>
                            </div>
                        </div>
                    )
                })}
            </div>
            <section className="postsInfo">
                {posts.map((post) => {
                    return (
                        <div className={post.id + " readMore"} key={post.id} id={post.id} style={{ display: "none" }}>
                            <div>
                                <span className="close" style={{ zIndex: "1" }} onClick={() => closeReadMore(post.id)}>X</span>
                                <h3>{post.name}</h3>
                            </div>

                            <img src={post.photo} alt="" />

                            <p>{post.description}</p>
                        </div>
                    )
                })}
            </section> 
            <div className="black"></div>
        </div>
        </div>
    )
}