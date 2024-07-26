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
            <div className="register">
                <a href="/login">Login</a>
                <a href="/cadaster">Cadastrar</a>
            </div>
        </header>
    )
}