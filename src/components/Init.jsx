import Header from './Header'
import Footer from './Footer';
import "../public/Header.css";
import "../public/Init.css";

export default function Init() {
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
                    <div className='card'>
                        <div className='card__left-book'>
                            <div className='left-book__image'> 
                            </div>
                            <h3>Autor</h3>
                        </div>
                        <div className='card__right-book'>
                            <h1>Name</h1>
                            <p>description</p>
                            <a href="#">Ver mais</a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card__left-book'>
                            <div className='left-book__image'>
                            </div>
                            <h3>Autor</h3>
                        </div>
                        <div className='card__right-book'>
                            <h1>Name</h1>
                            <p>description</p>
                            <a href="#">Ver mais</a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card__left-book'>
                            <div className='left-book__image'>
                            </div>
                            <h3>Autor</h3>
                        </div>
                        <div className='card__right-book'>
                            <h1>Name</h1>
                            <p>description</p>
                            <a href="#">Ver mais</a>
                        </div>
                    </div>
                    
                    
                </section>
            </main>
            <Footer />
        </>
    )

}