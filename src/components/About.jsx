import Header from "./Header"
import "../public/About.css"
import Footer from "./Footer"

export default function About() {
    return (
        <div className="content">
            <Header />
            <div className="about-me">
                <h1>Sobre</h1>
                <p>
                    AstroWorld é um projeto de astronomia, onde o principal intuito é construir uma comunidade onde as pessoas possam
                    compratilhar experiências e fotos capturadas de corpos celestes com outras pessoas que acessem a plataforma.
                </p>

                <h2>Sobre mim</h2>
                <p>
                    Me chamo Miguel, tenho 17 anos e estudo programação desde 2022. Estou fazendo técnico em Desenvolvimento de Sistemas
                    e criei esse site para aprimorar minhas habilidades de programação. Espero que com esse projeto eu possa contribuir
                    para o universo da astronomia, promovendo a ciência no Brasil.
                </p>
            </div>
            <Footer />
        </div>
    )
}