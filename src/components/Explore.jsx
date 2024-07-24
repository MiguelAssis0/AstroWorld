import { useState, useEffect } from "react"
import Card from "./Card"
import "../public/Explore.css"

export default function Explore() {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await fetch(`http://localhost:5000/postsExplore`);
            const jsonData = await response.json();

            setPosts(jsonData);
        } catch (error) {
            console.log(error.message);
        }
    }

    const SearchPost = (event) => {
        event.preventDefault();
        const search = document.getElementById("search").value;
        if(!search) return;
        const response = fetch(`http://localhost:5000/postsSearch`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                search
            })
        });
    }

    useEffect(() => {
        getPosts();
    }, []);

    return(
        <div className="content-explore">
            <form onSubmit={SearchPost}>
                <input type="text" name="search" id="search" placeholder="Pesquisar..."/>
            </form>
            <Card posts={posts} />
        </div>
    )
}