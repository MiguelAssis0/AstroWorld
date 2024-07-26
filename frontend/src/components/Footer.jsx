import "../public/Footer.css"

export default function Footer(){
    return(
        <footer>
            <div className="contact">
                <form>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                    <input 
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Assunto"
                        required
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Mensagem"
                        required
                    ></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </footer>
    )
}