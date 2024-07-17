export default function Header() {
    return (
        <header>
            <div>
                <h1>AstroWorld</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </nav>
            <div className="login">
                <a href="#">Login</a>
                <a href="#">Cadastrar</a>
            </div>
        </header>
    )
}