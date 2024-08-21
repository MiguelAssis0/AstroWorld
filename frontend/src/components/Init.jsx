import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer';
import "../public/Header.css";
import "../public/Init.css"; 
import { API_URL } from './Api';
import axios from 'axios';



export default function Init() {
    const [threePost, setThreePost] = useState([]);

    const getThreePosts = async () => {
        try {
            const response = await axios.get(`${API_URL}/postsThree`);
            const jsonData = response.data;  
            setThreePost(jsonData);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    useEffect(() => {
        getThreePosts();
    }, [])


    return(
        <>
            <Header />
            <main>
                <section className='container'>
                    <div>
                        <h1>Um universo da astronomia para você explorar!</h1>
                        <p>A AstroWorld é um website de enciclopedia de astronomia, onde você pode compartilhar suas experiências com planetas, postar fotos e descrições sobre ele onde todos podem ver! Venha fazer parte da comunidade AstroWorld.</p>
                    </div>
                </section>
                <section className='about'>
                    <h1>Sobre a AstroWorld</h1>
                    <p>O AstroWorld é um projeto desenvolvido por um estudante de programação, afim de mesclar duas paixões de astronomia e programação. A ideia do projeto é que se crie uma comunidade onde qualquer pessoa possa compratilhar experiências e fotos capturadas de corpos celestes com outras pessoas que acessem a plataforma. Esse projeto foi feito para estudos afim de aprimorar meus conhecimentos em programação.</p>
                    <a href="/about">Ler mais...</a>
                </section>
                <section className='cards'>
                    {threePost.map((post) => {
                        return (
                            <div className='card' key={post.id}>
                                <div className='card__left-book'>
                                    <div className='left-book__image'>
                                        <img src={post.photo} alt="" />
                                    </div>
                                    <p>{post.temperature}ºC</p>
                                </div>
                                <div className='card__right-book'>
                                    <h1>{post.name}</h1>
                                    <p>{post.description.length > 50 ? post.description.substring(0, 64) + "..." : post.description}</p>
                                    <a href="/cadaster">Ver mais</a>
                                </div>
                            </div>
                        )
                    })}
                   
                    
                    
                </section>
            </main>
            <Footer />
        </>
    )

}