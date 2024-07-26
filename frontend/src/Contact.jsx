import Footer from "./Footer"
import "./public/Contact.css"
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function Contact() {

    return (
        <>
            <a href="/">
                <FaLongArrowAltLeft />
            </a>
            <div className="content-contact">
                
                <Footer />
            </div>
        </>
    )
}